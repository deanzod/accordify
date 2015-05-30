/**
 * accordify - v1.0 - 30th May 2015
 * https://github.com/deanzod/accordify
 *
 * Copyright (c) 2015 Dean Morgan
 * http://deanmorgandeveloper.co.uk
 * http://deanblog.co.uk
 *
 * MIT licensed
 */
 (function($) 
	{
			$.fn.accordify = function(options) 
				{
				    
					var trigger = this;
					//set options
					trigger.optvals = 
						{
					        startOpen: false,
					        singleOpen: true,
					        target: '.accordion',
					        activeClass: 'acActive',
					        openSpeed: 500,
					        closeSpeed: 500,
					        openIcon: '<img src="images/plus-icon.png" />',
					        closeIcon: 'rotate' 
					    }
					var opt = $.extend({},this.optvals, options );

					//add trigger icon
					trigger.prepend('<span class="acIcon">'+opt.openIcon+'</span>');
					
					//only add/change a close icon if it's not set to rotate the open icon
					function close_icon(el)
						{
							if(opt.closeIcon != 'rotate')
								{
									el.html(opt.closeIcon);
								}
						}
					
					//only change open icon if the close icon is not set to rotate
					function open_icon(el)
						{
							if(opt.closeIcon != 'rotate')
								{
									el.html(opt.openIcon);
								}
						}
					
					//set the accordion to open or closed on load depending on the startOpen option
					if(!opt.startOpen)
						{
							trigger.next(opt.target).hide();
							trigger.removeClass(opt.activeClass)
							.find('.acIcon').html(opt.openIcon);
						} 
					else
						{
							trigger.addClass(opt.activeClass)
							.next(opt.target).show();
							close_icon(trigger.find('.acIcon'));
						}
					
					//fire accordion with click event
					trigger.on('click', function()
						{
						
							if($(this).hasClass(opt.activeClass))
								{
									$(this).removeClass(opt.activeClass).next(opt.target).slideUp(opt.closeSpeed);
									open_icon($(this).find('.acIcon'));
									
								}
								else	
								{
									if(opt.singleOpen)
										{
											trigger.removeClass(opt.activeClass);
											trigger.next(opt.target).slideUp(opt.closeSpeed);
											open_icon(trigger.find('.acIcon'));

										}
								
									$(this).addClass(opt.activeClass).next(opt.target).slideDown(opt.openSpeed);
									close_icon($(this).find('.acIcon'));
								}
							
						}
					);
			
				};
	}
(jQuery));
