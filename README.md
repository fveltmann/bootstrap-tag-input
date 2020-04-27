# Bootstrap Tag Input
## Introduction
This package provides a simple tag input made out of [bootstrap](https://getbootstrap.com/) elements. It is lightweight and yet really simple, but more features are coming in the future.

[Jquery](https://jquery.com/) and [Bootstrap](https://getbootstrap.com/) is required.

## How to use
### Create a simple bootstrap input field

	<div class="form-group">
	    <label for="inputDummy">Email address</label>
	    <input type="text" class="form-control" id="inputDummy" placeholder="optional">
	</div>
### Initialize the tag input on it

    new BootstrapTagInput($('#inputDummy'));
    
Yout can hand over a second string paramenter to select [bootstrap badge](https://getbootstrap.com/docs/4.4/components/badge/) color class. Supported is 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light' and 'dark'.

On submitting the form including the input, the tag labels will be sent from the original input field you initialized the tag input on. The value will be all tag labels seperated by a semicolon.

## Additional
If you have any questions, feel free to contact me and ask. More features will come soon.