import './categories-bar.styles.scss';

const CategoriesBar = () => {
  return (
    <div className='categories-bar-container'>
        <div className='cb-left-section'>
            <button>Best</button>
            <button>Hot</button>
            <button>New</button>
            <button>Top</button>
        </div>
        <div className='cb-right-section'>

        </div>
    </div>
  )
}

export default CategoriesBar