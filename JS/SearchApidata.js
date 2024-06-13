
var obj = [
    {
        id: "1",
        name: "jadav"
    },
    {
        id: "2",
        name: "ravi"
    },
    {
        id: "3",
        name: "bhuro"
    },
    {
        id: "4",
        name: "ravi"
    },
    {
        id: "5",
        name: "nilesh"
    },
    {
        id: "6",
        name: "bhuro"
    },

    {
        id: "7",
        name: "mayur"
    },

    {
        id: "8",
        name: "nilesh"
    },
    {
        id: "9",
        name: "vivek"
    },
        {
        id: "10",
        name: "mayur"
    },
    
]

function renderTable(data) {

    var tbldata = document.getElementById("tbl")

    var h = `<table>
    <thead><tr>
    <th>id</th>
    <th>name</th></tr></thead> 
    `
    data && data.map((v) => (

        h += `
        <tbody>
        <tr>
        <td>${v.id}</td>
        <td>${v.name}</td>
        </tr>
        </tbody>
        `
    ))

    tbldata.innerHTML = h + `</table>`

}
renderTable(obj)


let seatchdata = () => {


    let inp_tag = document.getElementById("inp")


    let chk = obj.filter((v) => {
        return v.name === inp_tag.value
    })

    renderTable(chk)


    // console.log(chk)

}
