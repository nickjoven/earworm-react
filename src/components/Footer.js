const Footer = ({ detailView }) => {
    return (
        <div className={detailView? 'bottom-footer' : 'footer'}>
            <span>
                <div>
                    earworm
                </div>
                <div>
                    react app by Nick Joven
                </div>
            </span>                     
        </div>
    )
}

export default Footer