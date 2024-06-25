import React, { useState } from "react";
import './CardComponent.css'
import { MdCreditCard } from "react-icons/md";
function CardComponent(props) {
    return (
        <>
            {props.cards.map((card, index) => (
                <div className="card-container" key={index}>
                    <div className="details">
                        <div className="default-btn">
                            <p><b>{card.title}</b></p>
                            {props.defaultCardIndex === index && (
                                <button>
                                    Default
                                </button>
                            )}
                        </div>
                        <span className="span"><MdCreditCard />{card.cardInfo}</span>
                    </div>

                    <div className="remove-btn">
                        <button onClick={() => props.makeDefaultClicked(index)} className="makedef">
                            {props.defaultCardIndex !== index ? 'Make Default' : ''}
                        </button>
                        <button onClick={() => props.handleRemove(index)} className="remove">Remove</button>
                    </div>
                </div>
            ))}
        </>
    );
}


export default CardComponent;
