import Column from 'components/Column/Column';
import './BoardContent.scss';

const BoardContent = () => {
    return (
        <div className="board-content">
            <Column />
            <Column />
            <Column />
        </div>
    );
}

export default BoardContent;