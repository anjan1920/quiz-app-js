

document.addEventListener('DOMContentLoaded', () => {
    

    //questions 
    //100 questions
    let questions = [
    {
      "question": "Which sorting algorithm has an average-case time complexity of O(n log n) and is a comparison sort?",
      "choice": [
        "Bubble Sort",
        "Selection Sort",
        "Merge Sort",
        "Insertion Sort"
      ],
      "answer": "Merge Sort"
    },
    {
      "question": "In Python, what is the correct way to open a file named 'data.txt' for reading?",
      "choice": [
        "open('data.txt', 'w')",
        "open('data.txt', 'a')",
        "open('data.txt', 'r')",
        "open('data.txt', 'x')"
      ],
      "answer": "open('data.txt', 'r')"
    },
    {
      "question": "What is the primary purpose of a constructor in C++?",
      "choice": [
        "To destroy objects when they are no longer needed",
        "To initialize a new object when it is created",
        "To return a value from a function",
        "To define a static method"
      ],
      "answer": "To initialize a new object when it is created"
    },
    {
      "question": "Which JavaScript method is used to remove the last element from an array and return that element?",
      "choice": [
        "shift()",
        "unshift()",
        "pop()",
        "push()"
      ],
      "answer": "pop()"
    },
    {
      "question": "Which data structure is efficient for searching, insertion, and deletion operations with an average time complexity of O(log n)?",
      "choice": [
        "Array",
        "Linked List",
        "Hash Table",
        "Binary Search Tree"
      ],
      "answer": "Binary Search Tree"
    },
    {
      "question": "What does 'pip install' do in Python?",
      "choice": [
        "Executes a Python script",
        "Installs Python itself",
        "Installs Python packages/libraries",
        "Uninstalls Python packages"
      ],
      "answer": "Installs Python packages/libraries"
    },
    {
      "question": "In C++, what is the difference between '==' and '.equals()'?",
      "choice": [
        "'==' compares values, '.equals()' compares memory addresses",
        "There is no '.equals()' in C++; '==' is used for all comparisons",
        "'==' compares memory addresses, '.equals()' compares content (for custom classes)",
        "'.equals()' is for primitive types, '==' for objects"
      ],
      "answer": "There is no '.equals()' in C++; '==' is used for all comparisons"
    },
    {
      "question": "What is the role of 'Node.js' in web development?",
      "choice": [
        "A JavaScript framework for front-end development",
        "A JavaScript runtime environment for server-side programming",
        "A CSS preprocessor",
        "A database management system"
      ],
      "answer": "A JavaScript runtime environment for server-side programming"
    },
    {
      "question": "Which traversal method visits the root node, then the left subtree, then the right subtree?",
      "choice": [
        "Pre-order traversal",
        "In-order traversal",
        "Post-order traversal",
        "Breadth-first traversal"
      ],
      "answer": "Pre-order traversal"
    },
    {
      "question": "What is a 'decorator' in Python?",
      "choice": [
        "A function that modifies another function's behavior",
        "A built-in data type",
        "A method for string formatting",
        "A way to define classes"
      ],
      "answer": "A function that modifies another function's behavior"
    },
    {
      "question": "In C++, what is a 'pure virtual function'?",
      "choice": [
        "A function that returns no value",
        "A function that can be overridden by derived classes",
        "A virtual function with no implementation, making the class abstract",
        "A function that can only be called once"
      ],
      "answer": "A virtual function with no implementation, making the class abstract"
    },
    {
      "question": "How do you declare a constant variable in JavaScript?",
      "choice": [
        "var myConst = 10;",
        "let myConst = 10;",
        "const myConst = 10;",
        "static myConst = 10;"
      ],
      "answer": "const myConst = 10;"
    },
    {
      "question": "Which of the following is an example of a 'divide and conquer' algorithm?",
      "choice": [
        "Linear Search",
        "Bubble Sort",
        "Quick Sort",
        "Insertion Sort"
      ],
      "answer": "Quick Sort"
    },
    {
      "question": "What is the purpose of '__init__' method in Python classes?",
      "choice": [
        "To destroy an object",
        "To define an object's behavior",
        "To initialize the object's attributes",
        "To inherit properties from a parent class"
      ],
      "answer": "To initialize the object's attributes"
    },
    {
      "question": "What is 'nullptr' in C++11 and later versions?",
      "choice": [
        "A macro for NULL",
        "An integer value representing null",
        "A keyword that represents a null pointer constant",
        "A function to check for null"
      ],
      "answer": "A keyword that represents a null pointer constant"
    },
    {
      "question": "Which built-in JavaScript object is used to perform mathematical operations?",
      "choice": [
        "Array",
        "Date",
        "Math",
        "String"
      ],
      "answer": "Math"
    },
    {
      "question": "What is a 'doubly linked list'?",
      "choice": [
        "A linked list where each node has a pointer to the next node only",
        "A linked list where each node has pointers to both the next and previous nodes",
        "A linked list that can only store two elements",
        "A linked list used only for sorting"
      ],
      "answer": "A linked list where each node has pointers to both the next and previous nodes"
    },
    {
      "question": "How do you handle exceptions in Python?",
      "choice": [
        "using 'throw' and 'catch'",
        "using 'try' and 'except'",
        "using 'error' and 'handle'",
        "using 'if-else' statements"
      ],
      "answer": "using 'try' and 'except'"
    },
    {
      "question": "In C++, what is 'std::vector'?",
      "choice": [
        "A fixed-size array",
        "A dynamic array (resizable array)",
        "A linked list implementation",
        "A hash table implementation"
      ],
      "answer": "A dynamic array (resizable array)"
    },
    {
      "question": "Which keyword is used to declare a function in JavaScript?",
      "choice": [
        "func",
        "def",
        "function",
        "method"
      ],
      "answer": "function"
    },
    {
      "question": "What is the worst-case time complexity of inserting an element into a hash table with perfect hashing?",
      "choice": [
        "O(1)",
        "O(log n)",
        "O(n)",
        "O(n^2)"
      ],
      "answer": "O(1)"
    },
    {
      "question": "Which loop in Python iterates over a sequence (like a list, tuple, string, or dictionary)?",
      "choice": [
        "for loop",
        "while loop",
        "do-while loop",
        "until loop"
      ],
      "answer": "for loop"
    },
    {
      "question": "What is the purpose of the 'const' keyword in C++ when applied to a member function?",
      "choice": [
        "It makes the function static",
        "It prevents the function from being overridden",
        "It ensures the function does not modify the object's state",
        "It makes the function private"
      ],
      "answer": "It ensures the function does not modify the object's state"
    },
    {
      "question": "How do you add an event listener to an HTML element using JavaScript?",
      "choice": [
        "element.on('click', myFunction)",
        "element.listen('click', myFunction)",
        "element.addEventListener('click', myFunction)",
        "element.attachEvent('onclick', myFunction)"
      ],
      "answer": "element.addEventListener('click', myFunction)"
    },
    {
      "question": "Which data structure is suitable for implementing Breadth-First Search (BFS)?",
      "choice": [
        "Stack",
        "Queue",
        "Heap",
        "Tree"
      ],
      "answer": "Queue"
    },
    {
      "question": "Which sorting algorithm has an average-case time complexity of O(n log n) and is a comparison sort?",
      "choice": [
        "Bubble Sort",
        "Selection Sort",
        "Merge Sort",
        "Insertion Sort"
      ],
      "answer": "Merge Sort"
    },
    {
      "question": "In Python, what is the correct way to open a file named 'data.txt' for reading?",
      "choice": [
        "open('data.txt', 'w')",
        "open('data.txt', 'a')",
        "open('data.txt', 'r')",
        "open('data.txt', 'x')"
      ],
      "answer": "open('data.txt', 'r')"
    },
    {
      "question": "What is the primary purpose of a constructor in C++?",
      "choice": [
        "To destroy objects when they are no longer needed",
        "To initialize a new object when it is created",
        "To return a value from a function",
        "To define a static method"
      ],
      "answer": "To initialize a new object when it is created"
    },
    {
      "question": "Which JavaScript method is used to remove the last element from an array and return that element?",
      "choice": [
        "shift()",
        "unshift()",
        "pop()",
        "push()"
      ],
      "answer": "pop()"
    },
    {
      "question": "Which data structure is efficient for searching, insertion, and deletion operations with an average time complexity of O(log n)?",
      "choice": [
        "Array",
        "Linked List",
        "Hash Table",
        "Binary Search Tree"
      ],
      "answer": "Binary Search Tree"
    },
    {
      "question": "What does 'pip install' do in Python?",
      "choice": [
        "Executes a Python script",
        "Installs Python itself",
        "Installs Python packages/libraries",
        "Uninstalls Python packages"
      ],
      "answer": "Installs Python packages/libraries"
    },
    {
      "question": "In C++, what is the difference between '==' and '.equals()'?",
      "choice": [
        "'==' compares values, '.equals()' compares memory addresses",
        "There is no '.equals()' in C++; '==' is used for all comparisons",
        "'==' compares memory addresses, '.equals()' compares content (for custom classes)",
        "'.equals()' is for primitive types, '==' for objects"
      ],
      "answer": "There is no '.equals()' in C++; '==' is used for all comparisons"
    },
    {
      "question": "What is the role of 'Node.js' in web development?",
      "choice": [
        "A JavaScript framework for front-end development",
        "A JavaScript runtime environment for server-side programming",
        "A CSS preprocessor",
        "A database management system"
      ],
      "answer": "A JavaScript runtime environment for server-side programming"
    },
    {
      "question": "Which traversal method visits the root node, then the left subtree, then the right subtree?",
      "choice": [
        "Pre-order traversal",
        "In-order traversal",
        "Post-order traversal",
        "Breadth-first traversal"
      ],
      "answer": "Pre-order traversal"
    },
    {
      "question": "What is a 'decorator' in Python?",
      "choice": [
        "A function that modifies another function's behavior",
        "A built-in data type",
        "A method for string formatting",
        "A way to define classes"
      ],
      "answer": "A function that modifies another function's behavior"
    },
    {
      "question": "In C++, what is a 'pure virtual function'?",
      "choice": [
        "A function that returns no value",
        "A function that can be overridden by derived classes",
        "A virtual function with no implementation, making the class abstract",
        "A function that can only be called once"
      ],
      "answer": "A virtual function with no implementation, making the class abstract"
    },
    {
      "question": "How do you declare a constant variable in JavaScript?",
      "choice": [
        "var myConst = 10;",
        "let myConst = 10;",
        "const myConst = 10;",
        "static myConst = 10;"
      ],
      "answer": "const myConst = 10;"
    },
    {
      "question": "Which of the following is an example of a 'divide and conquer' algorithm?",
      "choice": [
        "Linear Search",
        "Bubble Sort",
        "Quick Sort",
        "Insertion Sort"
      ],
      "answer": "Quick Sort"
    },
    {
      "question": "What is the purpose of '__init__' method in Python classes?",
      "choice": [
        "To destroy an object",
        "To define an object's behavior",
        "To initialize the object's attributes",
        "To inherit properties from a parent class"
      ],
      "answer": "To initialize the object's attributes"
    },
    {
      "question": "What is 'nullptr' in C++11 and later versions?",
      "choice": [
        "A macro for NULL",
        "An integer value representing null",
        "A keyword that represents a null pointer constant",
        "A function to check for null"
      ],
      "answer": "A keyword that represents a null pointer constant"
    },
    {
      "question": "Which built-in JavaScript object is used to perform mathematical operations?",
      "choice": [
        "Array",
        "Date",
        "Math",
        "String"
      ],
      "answer": "Math"
    },
    {
      "question": "What is a 'doubly linked list'?",
      "choice": [
        "A linked list where each node has a pointer to the next node only",
        "A linked list where each node has pointers to both the next and previous nodes",
        "A linked list that can only store two elements",
        "A linked list used only for sorting"
      ],
      "answer": "A linked list where each node has pointers to both the next and previous nodes"
    },
    {
      "question": "How do you handle exceptions in Python?",
      "choice": [
        "using 'throw' and 'catch'",
        "using 'try' and 'except'",
        "using 'error' and 'handle'",
        "using 'if-else' statements"
      ],
      "answer": "using 'try' and 'except'"
    },
    {
      "question": "In C++, what is 'std::vector'?",
      "choice": [
        "A fixed-size array",
        "A dynamic array (resizable array)",
        "A linked list implementation",
        "A hash table implementation"
      ],
      "answer": "A dynamic array (resizable array)"
    },
    {
      "question": "Which keyword is used to declare a function in JavaScript?",
      "choice": [
        "func",
        "def",
        "function",
        "method"
      ],
      "answer": "function"
    },
    {
      "question": "What is the worst-case time complexity of inserting an element into a hash table with perfect hashing?",
      "choice": [
        "O(1)",
        "O(log n)",
        "O(n)",
        "O(n^2)"
      ],
      "answer": "O(1)"
    },
    {
      "question": "Which loop in Python iterates over a sequence (like a list, tuple, string, or dictionary)?",
      "choice": [
        "for loop",
        "while loop",
        "do-while loop",
        "until loop"
      ],
      "answer": "for loop"
    },
    {
      "question": "What is the purpose of the 'const' keyword in C++ when applied to a member function?",
      "choice": [
        "It makes the function static",
        "It prevents the function from being overridden",
        "It ensures the function does not modify the object's state",
        "It makes the function private"
      ],
      "answer": "It ensures the function does not modify the object's state"
    },
    {
      "question": "How do you add an event listener to an HTML element using JavaScript?",
      "choice": [
        "element.on('click', myFunction)",
        "element.listen('click', myFunction)",
        "element.addEventListener('click', myFunction)",
        "element.attachEvent('onclick', myFunction)"
      ],
      "answer": "element.addEventListener('click', myFunction)"
    },
    {
      "question": "Which data structure is suitable for implementing Breadth-First Search (BFS)?",
      "choice": [
        "Stack",
        "Queue",
        "Heap",
        "Tree"
      ],
      "answer": "Queue"
    }
  ]

 
    let questionNumber = questions.length
    console.log('Total Questions',questionNumber);
    

    //grab the start button
    const start_btn = document.getElementById('start-btn');
    const next_btn = document.getElementById('next-btn');
    const reset_btn = document.getElementById('reset-btn');
    const quiz_container = document.getElementById('quiz-container');
    const question_container = document.getElementById('question-container');
    const question_text = document.getElementById('question-text');
    const choice_list = document.getElementById('choices-list');

    const result_container = document.getElementById('result-container');
    const score = document.getElementById('score');


    let user_score = 0;
    
    let currentQuestion_index = Math.floor(Math.random()*questionNumber);
   
    //for track the question indx
   let question_shown = [];
   
    
    start_btn.addEventListener('click',()=>{
        console.log('start btn clicked');
        startQuiz();
        
    });

    function startQuiz() {
    // Hide the start button
    start_btn.classList.add('hidden');
    result_container.classList.add('hidden')

    // Show the question container
    question_container.classList.remove('hidden');
    

    // render the first question now
    renderQuestion();
}

function renderQuestion(){
    //generate 10 question 
    console.log('Question Num:',currentQuestion_index);
    const currentQ = questions[currentQuestion_index]
    //console.log(currentQ);
    
    question_text.textContent = currentQ.question
    //show the options
    choice_list.innerHTML = ""//clear the prev 
    //now loop through the choices 
    currentQ.choice.forEach(choice =>{
        //now create a li item and append to the ul
        const li = document.createElement('li')
        li.textContent = choice 
        
        //add the class properties
        
        li.className = `
        bg-blue-500 
        text-white 
        font-semibold 
        text-center 
        px-4 py-2 
        w-full max-w-md 
        rounded-lg 
        shadow-md 
        transition 
        duration-200 
        ease-in-out 
        transform 
        hover:bg-blue-600 
        hover:scale-105 
        cursor-pointer
        `;
        choice_list.appendChild(li);
        

        //now add event listener on the li
        li.addEventListener('click',()=>{
            selected_option(choice,currentQ,li);
            
        })
        


    })


}

function selected_option(choice,currentQ,li){
    console.log("user choice",choice);
    const correctAns = currentQ.answer
    //console.log(correctAns);

     if (choice === correctAns) {
          // Make correct choice green
        li.className += " bg-green-500 text-white";
        user_score++;
    } else {
        // Make wrong choice red
        li.className += " bg-red-500 text-white";
        //and make the correct once is green 
        const allOptions = choice_list.querySelectorAll("li");
        allOptions.forEach(element => {
            if(element.innerText == correctAns){
                element.className+='bg-green-500 text-white';
            }
            
        });

    }

    next_btn.classList.remove("hidden");
    //now disable click to all the options
    // Delay disabling all options slightly so class gets painted
    setTimeout(() => {
    const allOptions = choice_list.querySelectorAll("li");
    allOptions.forEach(option => {
        option.classList.add("pointer-events-none", "opacity-50");
    });
    },50)
    
    //Now on click the next btn
    next_btn.onclick = () => {
        question_shown.push(Number(currentQuestion_index));
        generateNext_question();
    };
    
}

function generateNext_question(){
    //generate new index which is 0-99 and not present in 
    //question_shown
     if ( question_shown.length >=10) {
        console.log(user_score);
        showResult();
        return;;

        
    }
    //generate new index
    let new_index;
    do {
        new_index = Math.floor(Math.random()*questionNumber);
    } while (question_shown.includes(new_index));

    //console.log('next question ,',question[index]);
    currentQuestion_index = new_index;
    renderQuestion();
    


}

function showResult() {
  question_container.classList.add('hidden');
  result_container.classList.remove('hidden');
  score.textContent = `Your Score: ${user_score} / 10`;

  reset_btn.onclick = ()=>{
    question_shown = []//reset 
    startQuiz();
  }
  
}




})