import './categories-bar.styles.scss';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

const CategoriesBar = () => {
  return (
    <div className='categories-bar-container'>
        <div className='cb-left-section'>
            <Button buttonType={BUTTON_TYPE_CLASSES.category}>Best</Button>
            <Button buttonType={BUTTON_TYPE_CLASSES.category}>Hot</Button>
            <Button buttonType={BUTTON_TYPE_CLASSES.category}>New</Button>
            <Button buttonType={BUTTON_TYPE_CLASSES.category}>Top</Button>

        </div>
        <div className='cb-right-section'>

        </div>
    </div>
  )
}

export default CategoriesBar