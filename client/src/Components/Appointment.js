<div id="add-member" class="modal fade" role="dialog">
              <div class="modal-dialog">
                <div class="row modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                  </div>
                  <div class="modal-body">
                    <form ref="myForm" onSubmit={this.handleSubmit}>
                      <div className="form-row company-form">
                        <div className="form-group col-md-6">
                          <input
                            className="form-control mdv-first-input company-inputs cm-popup"
                            placeholder="Member Email ID / Cambio ID"
                            type="text"

                          />
                        </div>
                        <div className="form-group col-md-6">
                          <input
                            className="form-control mdv-first-input company-inputs cm-popup"
                            placeholder="Phone Number"
                            type="text"

                          />
                        </div>
                        <div className="form-group col-md-6">
                          <input
                            className="form-control mdv-first-input company-inputs cm-popup"
                            placeholder="Member Name"
                            type="text"
                            ref="name"
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <input
                            className="form-control company-inputs cm-popup"
                            placeholder="Member Designtion"
                            type="text"
                            ref="member_designation"
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <input
                            className="form-control company-inputs mdv-first-input cm-popup"
                            placeholder="Panel"
                            ref="panel"
                            type="Number"
                          />
                        </div>

                        <div className="col-md-12 company-skip-btn text-center">
                          <buttom onClick={(e) => this.fSubmit(e)} className="btn company-skip">Add</buttom><br />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

