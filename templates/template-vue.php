<?php
/**
 * Created by PhpStorm.
 * User: dmytro
 * Date: 11/9/17
 * Time: 17:09
 */
/*
 * Template Name: Vue tmpl
 */
?>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
      integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
<style>
    #app {
        height: 100vh;
        width: 100vw;
        /*background-color: red;*/
        background: url("https://source.unsplash.com/category/nature/1920x1080") no-repeat center center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }

    #submit-form {
        margin-top: 40px;
    }

    .lead-form {
        background-color: rgba(255, 255, 255, 0.6);
        border-radius: 5px;
        padding: 10px 50px 30px 50px;
        margin-top: 100px;
    }

    span.city-span {
        color: (#444);
        text-transform: uppercase;
        margin-left: 5px;
        margin-top: 10px;
    }

    .form-control {
        margin-bottom: 3px;
    }
</style>
<body>
<div id="app">
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-md-offset-3">
                <div class="lead-form">
                    <h1 class="text-center">Fill Out This Form</h1>
                    <hr/>
                    <div class="row">
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="Starting Zip" v-model="startingZip">
                            <span class="city-span">{{startingCity}}</span>
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="Ending Zip" v-model="endingZip">
                            <span class="city-span">{{endingCity}}</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <button class="btn btn-primary btn-block" id="submit-form">Submit</button>
                        </div>
                    </div>
                </div><!-- end of .lead-form -->
            </div> <!-- end of .col-md-6.col-md-offset-3 -->
        </div> <!-- end of .row -->
    </div> <!-- end of .container -->
</div> <!-- end of #app -->
</body>

<script src="https://unpkg.com/vue@2.0.3/dist/vue.js"></script>
<script src="https://unpkg.com/axios@0.12.0/dist/axios.min.js"></script>
<script src="https://unpkg.com/lodash@4.13.1/lodash.min.js"></script>

<script>
    var app = new Vue({
        el: '#app',
        data: {
            startingZip: '',
            startingCity: '',
            endingZip: '',
            endingCity: ''
        },
        watch: {
            startingZip: function () {
                this.startingCity = ''
                if (this.startingZip.length === 5) {
                    this.lookupStartingZip()
                }
            },
            endingZip: function () {
                this.endingCity = ''
                if (this.endingZip.length === 5) {
                    this.lookupEndingZip()
                }
            }
        },
        methods: {
            lookupStartingZip: _.debounce(function () {
                let app = this
                this.startingCity = "Searching..."
                axios.get('http://ziptasticapi.com/' + app.startingZip).then(function (response) {
                    app.startingCity = response.data.city + ', ' + response.data.state
                }).catch(function (error) {
                    app.startingCity = 'Invalid ZIP Code'
                    app.startingCity = error
                })
            }, 500),
            lookupEndingZip: _.debounce(function () {
                let app = this
                this.endingCity = "Searching..."
                axios.get('http://ziptasticapi.com/' + app.endingZip).then(function (response) {
                    app.endingCity = response.data.city + ', ' + response.data.state
                }).catch(function (error) {
                    app.endingCity = 'Invalid ZIP Code'
                    app.endingCity = error
                })
            }, 500)
        }
    })
</script>