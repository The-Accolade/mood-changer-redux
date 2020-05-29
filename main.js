const store = Redux.createStore(reducer);

function reducer(state = [], action) {
    if(action.type === 'HAPPY') {
        const happy = document.getElementById('happy');
        const face = document.getElementById('face');
        happy.addEventListener('click', function() {
            face.innerHTML = action.payload;
        });
    } else if (action.type === 'SAD') {
        const sad = document.getElementById('sad');
        const face = document.getElementById('face');
        sad.addEventListener('click', function() {
            face.innerHTML = action.payload;
        });
    } else if (action.type === 'ANGRY') {
        const angry = document.getElementById('angry');
        const face = document.getElementById('face');
        angry.addEventListener('click', function() {
            face.innerHTML = action.payload;
        });
    }else if (action.type === 'CONFUSED') {
        const confused = document.getElementById('confused');
        const face = document.getElementById('face');
        confused.addEventListener('click', function() {
            face.innerHTML = action.payload;
        });
    }else {
        return state; 
    }
}

function happy() {
    return {
        type : 'HAPPY',
        payload : '¯\_(ツ)_/¯'
    }
}
function sad() {
    return {
        type : 'SAD',
        payload : '(ಥ﹏ಥ)'
    }
}
function angry() {
    return {
        type : 'ANGRY',
        payload : 'ಠ╭╮ಠ'
    }
}
function confused() {
    return {
        type : 'CONFUSED',
        payload : '◉_◉'   
    }
}

store.dispatch(happy());
store.dispatch(sad());
store.dispatch(angry());
store.dispatch(confused());

// console.log(store.getState());


// document.getElementById('happy').addEventListener('click', () => {
//     console.log('clicked!')
// });
// document.getElementById('sad').addEventListener('click', () => {
//     console.log('clicked!')
// });
// document.getElementById('angry').addEventListener('click', () => {
//     console.log('clicked!')
// });
// document.getElementById('confused').addEventListener('click', () => {
//     console.log('clicked!')
// });