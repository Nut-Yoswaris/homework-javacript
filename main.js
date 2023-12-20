const loginForm = document.querySelector('.login-form')
const inpUsername = document.querySelector('#username')
const inpPassword = document.querySelector('#password')

const users = [
    { username : "Andy" , password : "aa1234"},
    { username : "Nutty" , password : "bb2541"},
    { username : "Beer" , password : "ba1954"}

]
const hdlLogin = (e) => {
    e.preventDefault()
    // function ตรวจสอบค่าว่าง ใน input
            const usernameInput = document.getElementById('username').value;
        const passwordInput = document.getElementById('password').value;
        const user = users.find(u => u.username === usernameInput && u.password === passwordInput);

    let inputObj = {}
    let checkError = true ; 
    for(let el of loginForm.elements) {
        let valueInput = el.value.trim();
        // เงื่อนไขถ้าไม่มีค่าว่างกับไม่เริ่มต้นด้วยตัวเลข 
        if(el.id  === 'username' && !isNaN(valueInput.charAt(0))){
            alert("ต้องไม่มีช่องว่างและไม่เริ่มต้นด้วยตัวเลขนะจ้ะ อาจารย์จะไม่ให้ผ่าน");
            el.classList.add('error');
            return;
        }
        // ห้าม username น้อยกว่า 3 และ password น้อยกว่า 4 
        if(el.id === 'username' && valueInput.length <=3 || el.id === 'password' && valueInput.length <=4){
            alert("โปรดตรวจสอบ username หรือ password ของท่าน **ความยาวตัวใดตัวหนึ่งไม่ถึง**");
            el.classList.add('error');
            return;
        }
        //ต้องให้มี ตัวเลขและตัวอักษรใน password 
        if(el.id === "password" && !/\d/.test(valueInput) && /[a-zA-X]/.test(valueInput)){
            alert("password ต้องประกอบด้วย อักษรและตัวเลข")
            el.classList.add('error');
            return;
        }
        if(user){
            e.preventDefault()
            alert ('Login สำเร็จ')
            window.location.href = "https://www.wikipedia.org"
        } else {
            alert("รหัสผ่านของท่านไม่ถูกต้อง")
            break;
        }

    //   inputObj[el.id] = el.value
    }
    //  console.log(inputObj)
}
loginForm.addEventListener('submit' , hdlLogin)