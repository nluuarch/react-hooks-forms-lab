import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [name, setName] = useState("")
  const [category, setCategory] = useState("Produce")

  function handleName(event){
    setName(event.target.value)
  }

  function handleCategory(event){
    setCategory(event.target.value)
  }

  function handleSubmit(event){
    event.preventDefault();
    onItemFormSubmit({
      id: uuid(),
      name,
      category,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input 
          onChange={handleName}
          value={name}
          type="text" 
          name="name" 
        />
      </label>

      <label>
        Category:
        <select 
          onChange={handleCategory}
          value={category}
          name="category"
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;










// import React, { useState } from "react";
// import { v4 as uuid } from "uuid";

// function ItemForm({onItemFormSubmit}) {
//   const [name, setName] = useState("")
//   const [category, setCategory] = useState("Produce")

//   function handleName(event){
//     setName(event.target.value)
//   }

//   function handleCategory(event){
//     setCategory(event.target.value)
//   }

//   function handleSubmit(event){
//     event.preventDefault();
//     onItemFormSubmit({
//       id: uuid(),
//       name,
//       category,
//     })
//   }

//   return (
//     <form onSubmit={handleSubmit} className="NewItem">
//       <label>
//         Name:
//         <input 
//           onChange={handleName}
//           value={name}
//           type="text" 
//           name="name" 
//         />
//       </label>

//       <label>
//         Category:
//         <select 
//           onChange={handleCategory}
//           value={category}
//           name="category"
//         >
//           <option value="Produce">Produce</option>
//           <option value="Dairy">Dairy</option>
//           <option value="Dessert">Dessert</option>
//         </select>
//       </label>

//       <button type="submit">Add to List</button>
//     </form>
//   );
// }

// export default ItemForm;
