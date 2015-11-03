
function CnpViewModel(){
	var self = this;
	self.gender = ['male','female'];
	self.gvalue = ko.observable();
	self.gvalue.subscribe(function(newVal){CalculateVariableBasedPart(newVal);});
	self.cnp = ko.observable();

}

function CalculateCnp(){
	return CalculateVariableBasedPart();

}

function CalculateVariableBasedPart(gender){
	var bdt = $('#bday').datepicker({ dateFormat: 'dd-mm-yy' }).val();
	return gender+bdt;
}

function SetDataPicker(){
	$.datepicker.setDefaults(
    $.datepicker.regional[ '' ]);
	$('#bday').datepicker();
	$('#bday').datepicker("setDate",'today');

}


$(document).ready(function() {
	//$('#bday').val(d.getMonth()+"/"+d.getDate()+"/"+d.getFullYear(
	SetDataPicker();
   ko.applyBindings(new CnpViewModel());
   
});
