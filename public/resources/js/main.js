Contact = {
    CACHE:{
    		$filter:$('#filter'),
    		$contactList:$('#contacts'),
    		$contacts:$('.contact'),
    		$currentSelected:false
    },
    init: function() {
		var self = this;
		//SETUP EVENT LISTENERS
		// Delegate clicks on contact <li>'s to the container
		self.CACHE.$contactList.on( 'click', '.contact', function(){
			self.onContactPress($(this));
		});
		self.CACHE.$filter.on('change',function(){
			self.onSelectChange();
		})
    },
    	// Event hanlder for selecting a contact
    onContactPress:function(button){
    		var self = this;
    		
    		//if the button pressed is also selected, toggle everything off
    		if(button[0] == self.CACHE.$currentSelected[0]){
    			self.CACHE.$currentSelected = false;
    			button.removeClass('open');
    			this.CACHE.$contactList.removeClass('selected');
    			return;
    		}
    		//if there is a current selected item, shut it off
    		if(self.CACHE.$currentSelected){
    			self.CACHE.$currentSelected.removeClass('open')
    		}
    		//make the current item selected
    		button.addClass('open');
    		//make the contact list selected
    		this.CACHE.$contactList.addClass('selected');
    		//set the cache of the current selected item
    		self.CACHE.$currentSelected = button;
    },
    // Event handler for changing filter <select>
    onSelectChange:function(select){
    		self = this;
    		filterType = self.CACHE.$filter.val();
    		// Loop through contacts and toggle phone/email
    		for( var i=this.CACHE.$contacts.length-1; i > -1; i --){
    			var item = $(this.CACHE.$contacts[i]);
    			item.find('.selected-info').html(item.data(filterType));
    		}
    },
    
};

// Start the app
Contact.init();
