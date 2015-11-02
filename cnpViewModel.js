
function CnpViewModel(){
	var self = this;
	self.gender = ko.observable(['male','female']);	
	self.cnp = ko.computed(CalculateCnp);

}

function CalculateCnp(){
	return CalculateVariableBasedPart();

}

function CalculateVariableBasedPart(){
	var gender = $("#gnd").val();
	var bdt = $("#bday").val();
	return gender+bdt;
}



$( document ).ready(function() {
	var d = new Date();
	$('#bday').val(d.getMonth()+"/"+d.getDate()+"/"+d.getFullYear());
   ko.applyBindings(new CnpViewModel());
});