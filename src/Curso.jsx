import React from 'react'
import PropTypes from 'prop-types'

const Curso = ({title, image, price, profesor}) => {


    return (
        <div >

            <article className="card">
                <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
                    <img 
                    src={image ? image : "data:image/jpeg;base64,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"} 
                    alt={title ? title : 'no hay titulo'} />
                </div>
                <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
                    <h3 className="center">{title}</h3>
                    <div className="s-main-center">
                        {`PROF: ${profesor}`}
                    </div>
                    <div className="s-main-center">
                        <a className="button--ghost-alert button--tiny" href="https://ed.team">{`$${price}`}</a>
                    </div>
                </div>
            </article>
        </div>
    )
}

Curso.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    profesor: PropTypes.string
}

Curso.defaultProps = {
    title: 'No se encontro nigun titulo',
    image: 'data:image/jpeg;base64,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',
    price: ':(',
    profesor: 'no asignado aun'
}

export default Curso