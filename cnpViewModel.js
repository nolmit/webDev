
function CnpViewModel(){
	var self = this;
	self.gender = ko.observable(['male','female']);	
	self.cnp = CalculateCnp();

}

function CalculateCnp(){
	return CalculateVariableBasedPart();

}

function CalculateVariableBasedPart(){
	var gender = $("#gnd").val();
	var bdt = $("#date").val();
	return gender+bdt;
}



$( document ).ready(function() {
   ko.applyBindings(new CnpViewModel());
});