import "./accordion.css";
import "./services.css";
import { useState } from "react";
export default function Acordion() {
    const [selected, setSelected] = useState(null);

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }

        setSelected(i);
    }

    return (
        <div className="filling">
            <div className="services">
                <h1>Estos son nuestros servicios ofrecidos:</h1>
                <div className="accordion">
                    {data.map((item, i) => (
                        <div className="accordionItem" key={item.question}>
                        <div className="accordionTitle" onClick={() => toggle(i)}>
                            <h2>{item.question}</h2>
                            <span>{selected === i ? "-" : "+" }</span>
                        </div>
                        <div className={
                            selected === i ? "accordionContent show" : "accordionContent" 
                        } onClick={() => toggle(i)}>
                            <p>{item.answer}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

const data = [
    {   
        question: 'Pregunta 1',
        answer:
            'Occaecat occaecat consectetur consequat eiusmod adipisicing in ex deserunt minim ut officia pariatur do nisi magna est sit nulla. Non labore dolor aliqua qui do ut occaecat consequat deserunt irure duis pariatur fugiat adipisicing. Mollit eiusmod tempor enim proident amet laboris excepteur.'
    },
    {
        question: 'Pregunta 2',
        answer:
            'Occaecat occaecat consectetur consequat eiusmod adipisicing in ex deserunt minim ut officia pariatur do nisi magna est sit nulla. Non labore dolor aliqua qui do ut occaecat consequat deserunt irure duis pariatur fugiat adipisicing. Mollit eiusmod tempor enim proident amet laboris excepteur.'
    },
    {
        question: 'Pregunta 3',
        answer:
            'Occaecat occaecat consectetur consequat eiusmod adipisicing in ex deserunt minim ut officia pariatur do nisi magna est sit nulla. Non labore dolor aliqua qui do ut occaecat consequat deserunt irure duis pariatur fugiat adipisicing. Mollit eiusmod tempor enim proident amet laboris excepteur.'
    },
    {
        question: 'Pregunta 4',
        answer:
            'Occaecat occaecat consectetur consequat eiusmod adipisicing in ex deserunt minim ut officia pariatur do nisi magna est sit nulla. Non labore dolor aliqua qui do ut occaecat consequat deserunt irure duis pariatur fugiat adipisicing. Mollit eiusmod tempor enim proident amet laboris excepteur.'
    },
    {   
        question: 'Pregunta 5',
        answer:
            'Occaecat occaecat consectetur consequat eiusmod adipisicing in ex deserunt minim ut officia pariatur do nisi magna est sit nulla. Non labore dolor aliqua qui do ut occaecat consequat deserunt irure duis pariatur fugiat adipisicing. Mollit eiusmod tempor enim proident amet laboris excepteur.'
    },
    {   
        question: 'Pregunta 6',
        answer:
            'Occaecat occaecat consectetur consequat eiusmod adipisicing in ex deserunt minim ut officia pariatur do nisi magna est sit nulla. Non labore dolor aliqua qui do ut occaecat consequat deserunt irure duis pariatur fugiat adipisicing. Mollit eiusmod tempor enim proident amet laboris excepteur.'
    },
]