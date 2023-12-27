import Task from 'components/Task/Task';
import './Column.scss';

const Column = () => {
    return (
        <div className="column">
            <header>Brainstore</header>
            <ul className='task-list'>
                <Task />
            </ul>
            <footer>Add another card</footer>
        </div>
    );
}

export default Column;