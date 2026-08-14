import { useState, type ChangeEvent } from "react";
import { categories } from "./data/db";

export default function Form() {
    const [activity, setActivity] = useState({
        category: '',
        name: '',
        calories: 0,
    });

    const handleChange = (
        e: 
            ChangeEvent<HTMLInputElement, HTMLInputElement> | 
            ChangeEvent<HTMLSelectElement, HTMLSelectElement>
    ) => {
        setActivity({
            ...activity,
            [e.target.id]: e.target.value
        })
    }



  return (
    <form className="space-y-5 bg-white shadow p-10 rounded-lg">
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="category" className="font-bold">Categoría:</label>
            <select 
                id="category"
                name="category" 
                className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                value={activity.category}
                onChange={handleChange}
            >
                { categories.map( item => (
                    <option
                        key={item.id}
                        value={item.id}
                    >
                        {item.name}
                    </option>
                ))}
            </select>
        </div>

        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="name" className="font-bold">Actividad:</label>
            <input 
                id="name"
                type="text"
                className="border border-slate-300 p-2 rounded-lg"
                placeholder="Ej. Comida, Jugo de Naranja, Ensalada, Ejercicio, Pesas, Bicicleta..."
                value={activity.name}
                onChange={handleChange}
            />
        </div>

        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="calories" className="font-bold">Calorías:</label>
            <input 
                id="calories"
                type="text"
                className="border border-slate-300 p-2 rounded-lg"
                placeholder="Calorías. ej. 300 o 500"
                value={activity.calories}
                onChange={handleChange}
            />
        </div>

        <input 
            type="submit" 
            className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white"
            value="Guardar Comida o Ejercicio"
        />
    </form>
  )
}
