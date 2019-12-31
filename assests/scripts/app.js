function buttonHandler(){
	let checkbox=document.getElementById('declaration')
	if (checkbox.checked)
	{
		ac()
	}
	else
	{
		alert('Please Click the Declaration Checkbox')
	}

}







function ac(){
let full_name=document.getElementById('full_name')
console.log(full_name.value)
let phone_number=document.getElementById('phone_number')
console.log(phone_number.value)
let father_name=document.getElementById('father_name')
console.log(father_name.value)
let email_id=document.getElementById('email_id')
console.log(email_id.value)
let address=document.getElementById('address')
console.log(address.value)
let dd=document.getElementById('dropdown')
let sel=dd.options[dd.selectedIndex].value;
console.log(sel)
let gen=document.getElementsByName('male')
for (inputs of gen){
	if (inputs.checked){
		var selected_option=inputs.value
	}
} 
console.log(selected_option)
let ft=document.getElementsByName('normal')
for (inputs of ft){
	if (inputs.checked){
		var selected_option=inputs.value
	}
} 
console.log(selected_option)
}



