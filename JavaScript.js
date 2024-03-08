var ResultTextNum = 0 , ItemBox = "";

function savedata(input)
{
    if (input!=""){
        if(ResultTextNum%2==0){
            ResultTextNum++;
            ItemBox = "<p class='ItemListZoje' id=num" + ResultTextNum + "><button class='RemoveButtom' id='rem" + ResultTextNum + "'onclick='empty("+ResultTextNum+")'>X</button >" + input + "</p>";
            WritePage("ItemsBox",ItemBox);
            InputText.value = "";
        }
        else{
            ResultTextNum++;
            ItemBox = "<p class='ItemListFard' id=num" + ResultTextNum + "><button class='RemoveButtom' id='rem" + ResultTextNum + "'onclick='empty("+ResultTextNum+")'>X</button >" + input + "</p>";
            WritePage("ItemsBox",ItemBox);
            InputText.value = "";
        }
    }}

function WritePage(ID,Content)
{
    document.getElementById(ID).innerHTML += Content;
}

function empty(ID)
{
    document.getElementById("num" + ID).remove();
    document.getElementById("rem" + ID).remove();
}