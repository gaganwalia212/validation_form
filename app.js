

function validation()
{
	//here we will do all sorts of validation
	var isValid=true;
	let name=document.querySelector("#name")
	name.setCustomValidity("")
	let str=name.value
	console.log(str)
	if(str=="")
	{
		name.setCustomValidity("Please enter your name ")
		name.reportValidity()
		isValid=false
		
	}
	//now check if the name contains any number or not
	for(let i=0;i<str.length;i++)
	{
		if(str[i]>='0'&&str[i]<='9')
		{
			name.setCustomValidity("Invalid name")
			name.reportValidity()
			isValid=false
	

		}
		
	}

	let rollNo=document.querySelector("#rollNo")
	rollNo.setCustomValidity("")
	str=rollNo.value
	console.log(str)
	//roll no is of 8 digits eg- 19124024
	if(str.length!==8)
	{
		rollNo.setCustomValidity("Invalid Roll Number")
		rollNo.reportValidity()
		isValid=false
	
	}
	//roll no has to start with 19 since onlu 2019 students are allowed
	if(str[0]!=='1'||str[1]!=='9')
	{
		rollNo.setCustomValidity("Only for 2019 batch")
		rollNo.reportValidity()
		isValid=false
		

	}


	let cgpa=document.querySelector("#cgpa")
	cgpa.setCustomValidity("")
	let no=Number(cgpa.value)
	console.log(no)
	console.log(typeof(no))
	if(no<7)
	{
		cgpa.setCustomValidity(">=7 Required")
		cgpa.reportValidity()
		isValid=false
		
	}
	if(no>10)
	{
		cgpa.setCustomValidity("Invalid CGPA")
		cgpa.reportValidity()
		isValid=false
		
	}

	let language1=document.querySelector("#language1")
	let language2=document.querySelector("#language2")
	language2.setCustomValidity("")

	let str1=language1.value
	let str2=language2.value
	console.log(str1)
	console.log(str2)
	if(str1===str2)
	{
		language2.setCustomValidity("Preferences must be different")
		language2.reportValidity()
		isValid=false
	}
	if(isValid)
	{
		alert("Registration done")
	}
	
}

document.querySelector("button").addEventListener("click",validation)