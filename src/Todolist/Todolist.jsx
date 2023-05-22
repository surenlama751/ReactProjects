import React, { useState, useEffect } from 'react';
import { FaCalendar, FaBusinessTime } from 'react-icons/fa';
import { AiFillSetting, AiOutlineClockCircle, AiFillDelete } from 'react-icons/ai';
import { RxCross2 } from 'react-icons/rx';
import Profileimage from './profile.jpg';
import './Todolist.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Todolist = () => {

  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useState([]);
  const [color, setColor] = useState('');
//all the navigation codes
const navigate = useNavigate();
const changeDirection = () => {
  navigate('/');
}

 useEffect (()=>{
    const storedItems = localStorage.getItem('todolistItems');//storing the data from this API to todolistItems place which is stored in variable storedItems.
    if (storedItems){ 
       //checking if there's any value    in storeditems and if theres a value go to next line
    setItems(JSON.parse(storedItems));
      //converint storeditmes into array.
    } 
  },[]);

  useEffect(() => {
    localStorage.setItem('todolistItems', JSON.stringify(items));
  }, [items]);

  function chooseColor1() {
    setColor('pink');
  }

  function chooseColor2() {
    setColor('blue');
  }

  function chooseColor3() {
    setColor('yellow');
  }

  function addItem() {
    if (!newItem) {//If the input is empty then it will trigger the alert message
      alert('Enter an item.');
      return;
    }

    //checking what button is pressed by the user and describing their colors
    let border;
    if (color === 'pink') {
      border = '3px solid pink';
    } else if (color === 'blue') {
      border = '3px solid rgb(90, 150, 227)';
    } else if (color === 'yellow') {
      border = '3px solid rgb(239, 195, 74)';
    }
    
    //setting each and every items id, value=this is got from the value input, border style as a object form insite of item.
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
      border: border,
      
    };
    //updating the value of items and NewItem and storing as a array and displaying it all.
    setItems(oldList => [...oldList, item]);
    setNewItem('');
  }

 //Inside the function, we create a new array called newArray using the filter method on the items state. The filter method creates a new array with all elements that pass a test implemented by the provided callback function.

// In this case, the callback function (item => item.id !== id) checks if the id of each item in the items array is not equal to the id passed as a parameter. It filters out the items that have a matching id.

  function deleteItem(id) {
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray);
  }

  return (
    <div className="main-container">
      <fieldset className="todolist-page">
        <legend id="circle-design"></legend>

        {/* FIRST COLUMN */}
        <div className="first-column">
          <img src={Profileimage} id="profile-pic" alt="Profile" />
          <span id="full-name">Suren Lama</span>
          <hr id="first-column-line" />
          <button id="calendar-icon" onClick={() => changeDirection}><FaCalendar /></button>
          <span id="daily-tasks">Today tasks</span>
          <div className="tasks">
            <ul className="various-tasks">
              <li id="tasks1"><span id="tasks11">Personal</span></li>
              <li id="tasks2"><span id="tasks11">Freelance</span></li>
              <li id="tasks3"><span id="tasks11">Work</span></li>
              <li id="tasks4"><span id="tasks11">Add filter</span></li>
            </ul>
          </div>
          <div className="setuptime-tasks">
            <button id="scheduled-tasks"><FaBusinessTime /></button>
            <span id="scheduled-text">Scheduled tasks</span>
          </div>
          <div className="setting">
            <button id="settings-icon"><AiFillSetting /></button>
            <span id="setting-text">Settings</span>
          </div>
        </div>

        {/* SECOND COLUMN */}
        <div className="second-column">
          <div className="button123">
            <button id="circle1" onClick={chooseColor1}></button>
            <button id="circle2" onClick={chooseColor2}></button>
            <button id="circle3" onClick={chooseColor3}></button>
          </div>
          <p id="first-header">Today main focus</p>
          <p id="second-header">Design team meeting</p>
          <div className="inputworks">
            <input
              type="text"
              placeholder="What is your next task?"
              id="setup-tasks"
              value={newItem}
              onChange={e => setNewItem(e.target.value)}
            />
            <button id="input-icons1"><AiOutlineClockCircle /></button>
            <button id="input-icons2"><FaCalendar /></button>
            <button id="add-button" onClick={addItem}>Add</button>
          </div>
          <div className="displayscreen">
            <ul>
            {items.map(item => (
                <li key={item.id} style={{ border: item.border }} id="display-list">
                  {item.value}
                  <button onCl
                  ick={() => deleteItem(item.id)} id="delete-icon">
                    <AiFillDelete />
                  </button>
                </li>
              ))}
            </ul>
{/* 
            To render each item, the items state is mapped using the map method. For each item in the items array, a <li> element is created.
            The style prop is used to apply the item.border value as the inline CSS border property for each list item. This applies the desired border style based on the item object's border property.
            The key prop is set to item.id, which ensures a unique identifier for each list item and helps React efficiently update the DOM when the list changes. */}

            
          </div>
        </div>
      </fieldset>


      
    </div>
  );
}

export default Todolist;