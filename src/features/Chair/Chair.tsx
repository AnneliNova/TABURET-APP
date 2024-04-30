import { connect } from "react-redux";
import { RootState } from "../../store";
import { Chair } from "../../reducers/chair"; 
import ChairCard from "./ChairCard";
import styles from "./Chair.module.scss";

// ...
interface Props {
    chairs: Chair[];
}

function Chairs({ chairs }: Props) { 
    return (
        <section>
            <div className={styles.list}>
                {chairs.map((m) => (
                    <ChairCard 
                        key={m.id}
                        id={m.id}
                        title={m.title}  
                        overview={m.overview} 
                        popularity={m.popularity}
                        imageSrc="/public/34.png" // Передайте шлях до зображення
                    />
                ))}
            </div>
        </section>
    );
}

const mapStateToProps = (state: RootState) => ({
    chairs: state.chairs.top,
});

const connector = connect(mapStateToProps);

export default connector(Chairs);
