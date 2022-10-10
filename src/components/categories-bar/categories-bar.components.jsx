import './categories-bar.styles.scss';

const CategoriesBar = () => {
  return (
    <div className='categories-bar-container'>
        <div className='cb-left-section'>
            <button>Hot</button>
            <button>Popular</button>
            <button>Button</button>
            <button>Button</button>
        </div>
        <div className='cb-right-section'>

        </div>
    </div>
  )
}

export default CategoriesBar