const gbtns = document.querySelectorAll(".gbtn");
const bbtns = document.querySelectorAll(".bbtn");
const pl1 = document.querySelector('.p1');
const pl2 = document.querySelector('.p2');
const c1 = document.querySelector('.c1');
const c2 = document.querySelector('.c2');
const title = document.querySelector('#title');
let play1 = true;
let count1=0;
let count2 =0;
let ch = true;
for(let b of gbtns)
{
    
    b.addEventListener('click',()=>{
       
       b.style.backgroundColor = '#93626E';
       b.disabled = true;
       tbtns.push(b.innerText);
       
       let res = winner();
       ch = true;
       
       if(play1)
       {
            for(let i=0;i<res.length;i++)
            {
                bbtns[res[i]].style.backgroundColor = '#F4ACB7';
                count1++;
                c1.innerText = count1;
                
                ch = false;
            }
            
            if(ch)
            {
                pl1.classList.remove('turn');
                pl2.classList.add('turn');
                play1 = false;
            }
        }
       else
       {
            for(let i=0;i<res.length;i++)
            {
                bbtns[res[i]].style.backgroundColor = '#A0BAAA';
                count2++;
                c2.innerText = count2;
                
                ch = false;
            }
           
            if(ch)
            {
                pl2.classList.remove('turn');
                pl1.classList.add('turn');
                play1 = true;
            }
       }

       if(count1+count2>=16 || count1>8 || count2>8)
       {
            for(let t of gbtns)
            {
                t.disabled = true;
            }

            if(count1>count2)
            {
                title.innerHTML = '\n        <h1>!!!Congratulation. PLAYER1 wins!!!</h1>\n    ';
                pl1.classList.add('turn');
                pl2.classList.remove('turn');
            }
            else if(count2>count1)
            {
                title.innerHTML = '\n        <h1>!!!Congratulations. PLAYER2 wins!!!</h1>\n    ';
                pl1.classList.remove('turn');
                pl2.classList.add('turn');
            }
            else
            {
                title.innerHTML = '\n        <h1>!!!It was a TIE!!!</h1>\n    ';
            }

            reset.innerHTML = 'NEW GAME';
       }
       
    });
}

const winner = function(){
    let index = [];
    for(let t of twin)
    {
        
        if(tbtns.includes(`${t[0]}`) && tbtns.includes(`${t[1]}`) && tbtns.includes(`${t[2]}`) && tbtns.includes(`${t[3]}`))
        {
            index.push(twin.indexOf(t));
            t[0] = t[1] = t[2] = t[3] = -1;
        }
    }
    return index;

}

const genable = function(arr){
    for(let a of arr)
    {
        a.style.backgroundColor = '#E3CACE';
        a.disabled = false;
    }
}

const benable = function(arr)
{
    for(let a of arr)
    {
        a.style.backgroundColor = '#ffe5d9';
    }
}


let tbtns = [];

const reset = document.querySelector("#reset");
reset.addEventListener('click',() => {
    
    genable(gbtns);
    benable(bbtns);
    title.innerHTML  = '\n        <h1>MAKE THE GRID YOURS!!!!!</h1>\n    ';
    pl1.classList.add('turn');
    pl2.classList.remove('turn');
    twin = [
        [0,4,5,9],
        [1,5,6,10],
        [2,6,7,11],
        [3,7,8,12],
        [9,13,14,18],
        [10,14,15,19],
        [11,15,16,20],
        [12,16,17,21],
        [18,22,23,27],
        [19,23,24,28],
        [20,24,25,29],
        [21,25,26,30],
        [27,31,32,36],
        [28,32,33,37],
        [29,33,34,38],
        [30,34,35,39]
    ];
    tbtns =[];
    count1 = count2 = 0;
    c1.innerText = c2.innerText = 0;
    play1 = true;
    reset.innerHTML = 'RESET';
})




let twin = [
    [0,4,5,9],
    [1,5,6,10],
    [2,6,7,11],
    [3,7,8,12],
    [9,13,14,18],
    [10,14,15,19],
    [11,15,16,20],
    [12,16,17,21],
    [18,22,23,27],
    [19,23,24,28],
    [20,24,25,29],
    [21,25,26,30],
    [27,31,32,36],
    [28,32,33,37],
    [29,33,34,38],
    [30,34,35,39]
];

