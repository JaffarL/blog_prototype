import React from "react";
import $ from 'jquery';
import bootstrap from "bootstrap";

export class Input extends React.Component{
    render(){
        return <div >
            <div className="row clearfix">
                <div className="col-md-12 column">
                    <form className="form-horizontal" role="form">
                        <div className="form-group">
                            <label htmlFor="inputEmail3" className="col-sm-2 control-label">Email</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control" id="inputEmail3" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputPassword3" className="col-sm-2 control-label">Password</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" id="inputPassword3" />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10">
                                <div className="checkbox">
                                    <label><input type="checkbox" />Remember me</label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10">
                                <button type="submit" className="btn btn-default">Sign in</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    }
}