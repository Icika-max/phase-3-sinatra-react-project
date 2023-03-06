// import React,{useState,useEffect} from "react";
// // import TaskList from "./taskList";


// function Search({ setSearch, search, data, setNewData }) {
//   const [selectedCategory, setSelectedCategory] = useState('')

//   const categoryList = data.map(category => category.due_date)
//   const newCategory = new Set(categoryList)
//   const newSetCategory = [...newCategory]
//   useEffect(() => {
//     if(selectedCategory === null || selectedCategory === ''){
//       setNewData(data)
//       return
//     }
//     const filteredCategory = data.filter(category => category.category === selectedCategory)
//     setNewData(filteredCategory);
//   }, [selectedCategory]);

//   return (
//     <div className="searchFilterSection">
//       <select onChange={(event) => setSelectedCategory(event.target.value)}>
//         <option value={""}>All Categories</option>
//         {newSetCategory &&
//           newSetCategory.map((item, index) => {
//             return (
//               <option key={index} value={item}>
//                 {item}
//               </option>
//             );
//           })}
//       </select>
//       <div className="searchSection">
//         <input
//           type="text"
//           value={search}
//           onChange={(e) => {
//             setSearch(e.target.value);
//           }}
//           placeholder="Search here..."
//         />
//       </div>
//     </div>
//   );
// }

// export default Search;