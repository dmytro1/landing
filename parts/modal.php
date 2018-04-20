<?php
/**
 * Created by PhpStorm.
 * User: dmytro
 * Date: 1/23/18
 * Time: 23:41
 */ ?>

<!-- Modal -->
<div class="modal fade product_view" tabindex="-1" id="myModal" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
	<div class="modal-dialog">

		<!-- Modal content-->
		<div class="modal-content">
			<div class="modal-header">
				<a href="#" data-dismiss="modal" class="class pull-right"><span
						class="glyphicon glyphicon-remove"></span></a>
				<h3 class="modal-title">HTML5 is a markup language</h3>
			</div>
			<div class="modal-body">
				<div class="row">
					<div id="js-product-info" class="product-info">
						<div class="col-md-6 product_img">
							<img src="<?= get_template_directory_uri() ?>/assets/built/images/iphone7.png">
						</div>
						<div class="col-md-6 product_content">
							<h4>Product Id: <span>51526</span></h4>
							<div class="rating">
								<span class="glyphicon glyphicon-star"></span>
								<span class="glyphicon glyphicon-star"></span>
								<span class="glyphicon glyphicon-star"></span>
								<span class="glyphicon glyphicon-star"></span>
								<span class="glyphicon glyphicon-star"></span>
								(10 reviews)
							</div>
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
								been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
								galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy
								text of the printing and typesetting industry.</p>
							<h3 class="cost"><span class="glyphicon glyphicon-usd"></span> 75.00
								<small class="pre-cost"><span class="glyphicon glyphicon-usd"></span> 60.00</small>
							</h3>
							<div class="row">
								<div class="col-sm-6 col-xs-6">
									<select class="form-control" name="select">
										<option value="" selected="">Color</option>
										<option value="black">Black</option>
										<option value="white">White</option>
										<option value="gold">Gold</option>
										<option value="rose gold">Rose Gold</option>
									</select>
								</div>
								<!-- end col -->
								<div class="col-sm-6 col-xs-6">
									<select class="form-control" name="select">
										<option value="" selected="">QTY</option>
										<option value="">1</option>
										<option value="">2</option>
										<option value="">3</option>
									</select>
								</div>
								<!-- end col -->
							</div>
							<div class="space-ten"></div>
							<div class="btn-ground">
								<a href="javascript:void(0);" class="btn btn-primary" id="next-personal">Checkout</a>
							</div>
						</div>
					</div>
					<div class="col-md-12 personal-info" id="js-personal-info">
						<div class="form-group text-center"><a href="javascript:void(0);" class="btn" id="prev-product-info">Go Back</a></div>
						<div class="row">
							<div class="form-group col-sm-6">
								<input type="text" name="first_name" class="form-control" placeholder="First Name" required>
							</div>
							<div class="form-group col-sm-6">
								<input type="text" name="last_name" class="form-control" placeholder="Last Name" required>
							</div>
						</div>
						<div class="form-group">
							<input type="email" name="email" class="form-control" placeholder="Email Address" required>
						</div>
						<div class="form-group">
							<input type="text" name="address1" class="form-control" placeholder="Address Line 1" required>
						</div>
						<div class="form-group">
							<input type="text" name="address2" class="form-control" placeholder="Address Line 2" required>
						</div>
						<div class="row">
							<div class="form-group col-sm-6">
								<input type="text" name="state" class="form-control" placeholder="State" required>
							</div>
							<div class="form-group col-sm-6">
								<input type="text" name="zip" class="form-control" placeholder="Zip Code" required>
								<input type="text" name="zip" class="form-control" placeholder="Zip Code" required>
								<input type="text" name="zip" class="form-control" placeholder="Zip Code" required>
								<input type="text" name="zip" class="form-control" placeholder="Zip Code" required>
							</div>
						</div>
						<div class="form-group">
							<select class="form-control" name="Country" required>
								<option selected value="">Choose a country</option>
								<option value="United States">United States</option>
								<option value="United Kingdom">United Kingdom</option>
								<option value="Australia">Australia</option>
								<option value="India">India</option>
							</select>
						</div>
						<div class="submit-area-2 row m0">
							<button type="submit" class="btn btn-rounded js-preorder-btn btn-block"><span>Pay with Paypal</span></button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
