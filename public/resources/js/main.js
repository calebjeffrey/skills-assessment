Contact = {
    CACHE:{
    		$contact:$('.contact'),
    		$filter:$('#filter'),
    		$contacts:$('#contacts')
    },
    init: function() {
		var self = this;
		self.CACHE.$contact.on('click',function(){
			self.onContactPress(this);
		})
		self.CACHE.$filter.on('change',function(){
			self.onSelectChange();
		})
    },
    onContactPress:function(button,self){
    		$previouslySelected = this.CACHE.$contacts.find('.open'); 
    		$previouslySelected.removeClass('open');
    		this.CACHE.$contacts.removeClass('selected')
    		//if the previously selected item is the item you are selecting, you have to shut it off and kick out
    		if(button==$previouslySelected[0]){
    			return;
    		}
    		$(button).toggleClass('open');
    		this.CACHE.$contacts.toggleClass('selected')
    },
    onSelectChange:function(select){
    		self = this;
    		filterType = self.CACHE.$filter.val()
    		for( var i=this.CACHE.$contact.length-1; i > -1; i --){
    			var item = $(this.CACHE.$contact[i]);
    			item.find('.selected-info').html(item.data(filterType));
    		}
    },
    
};

// Start the app
Contact.init();
