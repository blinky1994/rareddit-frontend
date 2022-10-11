import './button.styles.scss';
import icon_comment from '../../assets/chat-bubble.svg'
import icon_award from '../../assets/award.svg'
import icon_share from '../../assets/share.svg'

export const BUTTON_TYPE_CLASSES  = {
    post : 'button-post',
    category : 'button-category',
    postAction : 'button-postAction',
}

export const ICON_TYPE_CLASSES = {
    comment: 'icon-comment',
    award: 'icon-award',
    share: 'icon-share'
}

const getIcon = (iconType) => {
    switch(iconType) {
        case ICON_TYPE_CLASSES.comment:
          return icon_comment;

        case ICON_TYPE_CLASSES.award:
          return icon_award;

        case ICON_TYPE_CLASSES.share:
          return icon_share;

        default:
            return null;
      }
}

const Button = ({ children, buttonType, iconType, ...otherProps }) => {
    return (
    <button className={`custom-button ${buttonType} ${iconType}`}{...otherProps}>
        {
            iconType 
            && buttonType === BUTTON_TYPE_CLASSES.postAction 
            && <img src={getIcon(iconType)} alt='post-action-icon'/>
        }
        {children}
    </button>
  )
}

export default Button;