document.getElementById('result').focus()

function display(val) {
    document.getElementById('result').value += val;
};


function solve() {
    let x = document.getElementById('result').value;
    let y = eval(x);
    document.getElementById('result').value = y;
};



function clearScreen() {
    document.getElementById('result').value = "";
}

document.getElementById('result').addEventListener('keydown', function(e) {
    if (e.key === "Enter")
        return solve();
})