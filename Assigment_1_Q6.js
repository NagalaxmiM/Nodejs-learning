var sentence = 'Bangalore is the best Indian City'

var temp_list=[]
var word = ''
for (let i=0;i<sentence.length;i++){
    if (sentence[i]!=' '){
        word = word+sentence[i]
        if(i==sentence.length-1){
            temp_list.push(word)
        }
    }
    
    else{
        temp_list.push(word)
        var word = ''
    }
}

temp_list
var reverse_string
for (i=temp_list.length;i>=0;i--){
    reverse_string = reverse_string+temp_list[i]+ " "
}

console.log(reverse_string)