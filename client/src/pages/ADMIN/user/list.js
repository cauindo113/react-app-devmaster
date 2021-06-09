import React from 'react'

const UserAdmin = () => {
    return (
        <>
           <div style={{width: "100%"}}>
              <div style={{width: "100%"}} className="card">
                <div className="card-header card-header-primary">
                  <h4 className="card-title ">USER</h4>
                  <p className="card-category"> Here is a subtitle for this table</p>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table">
                      <thead className=" text-primary">
                        <tr><th>
                          ID
                        </th>
                        <th>
                          Name
                        </th>
                        <th>
                          Images
                        </th>
                       <th>
                         Action
                       </th>
                      </tr></thead>
                      <tbody>
                        <tr>
                          <td>
                            1
                          </td>
                          <td>
                            Dakota Rice
                          </td>
                          <td>
                            Niger
                          </td>
                          <td>
                          <button>edit</button>&emsp;<button>delete</button>
                          </td>
                          
                        </tr>
                        <tr>
                          <td>
                            2
                          </td>
                          <td>
                            Minerva Hooper
                          </td>
                          <td>
                            Curaçao
                          </td>
                          <td>
                          <button>edit</button>&emsp;<button>delete</button>
                          </td>
                        
                        </tr>
                        <tr>
                          <td>
                            3
                          </td>
                          <td>
                            Sage Rodriguez
                          </td>
                          <td>
                            Netherlands
                          </td>
                          <td>
                          <button>edit</button>&emsp;<button>delete</button>
                          </td>
                       
                        </tr>
                        <tr>
                          <td>
                            4
                          </td>
                          <td>
                            Philip Chaney
                          </td>
                          <td>
                            Korea, South
                          </td>
                          <td>
                          <button>edit</button>&emsp;<button>delete</button>
                          </td>
                      
                        </tr>
                        <tr>
                          <td>
                            5
                          </td>
                          <td>
                            Doris Greene
                          </td>
                          <td>
                            Malawi
                          </td>
                          <td>
                          <button>edit</button>&emsp;<button>delete</button>
                          </td>
                        
                        </tr>
                        <tr>
                          <td>
                            6
                          </td>
                          <td>
                            Mason Porter
                          </td>
                          <td>
                            Chile
                          </td>
                          <td>
                            <button>edit</button>&emsp;<button>delete</button>
                          </td>
                        
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div> 
        </>
    )
}

export default UserAdmin
