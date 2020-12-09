import React from "react";
import { Modal } from "react-bootstrap";
import { Localization } from "../../../config/localization/localization";
import { IUser } from "../../../model/model.user";
import { BaseComponent } from "../../base/baseComponent";
import { AppButton } from "../../form/button";
import { AppInput } from "../../form/input";


export enum EMODALTYPE {
    CREATE = 'create',
    EDIT = 'edit'
}


interface IProps {
    show: boolean;
    onHide(): void;
    type: EMODALTYPE;
    user?: IUser
    onEdit?(user: IUser): void
    onAdd?(user: IUser): void
}
interface IState {
    [key: string]: any;
    isFormValid:boolean;
    inputs: {
        name: { value: string, isValid: boolean },
        username: { value: string, isValid: boolean },
        phone: { value: string, isValid: boolean }
    }
}

export class UserModal extends BaseComponent<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        this.state = {
            isFormValid:false,
            inputs: {
                name: { value: "", isValid: false },
                username: { value: "", isValid: false },
                phone: { value: "", isValid: false },
            
            }
        }

    }

    componentDidMount() {
        this.initialState(this.props.user!)
    }

    componentDidUpdate(prevProps: IProps) {
        if (this.props.user !== prevProps.user) {
            this.initialState(this.props.user!)
        }
    }

    initialState(user: IUser) {
        this.setState({
            inputs: {
                name: { value: user?.name, isValid: true },
                username: { value: user?.username, isValid: true },
                phone: { value: user?.phone, isValid: true }
            }
        })
    }

    formToData(state:IState):IUser| undefined{
        return this.props.user && {...this.props.user,
            name:state.inputs.name.value,
            username:state.inputs.username.value,
            phone:state.inputs.phone.value,
        }
    }

    createUser(state:IState):IUser| undefined{
        return {
            id: `${Math.random()}_user`,
            name:state.inputs.name.value,
            username:state.inputs.username.value,
            phone:state.inputs.phone.value,
        }
    }

    onSubmit(type: EMODALTYPE) {
        switch (type) {
            case EMODALTYPE.EDIT: return this.props.onEdit && this.props.onEdit(this.formToData(this.state)!)
            case EMODALTYPE.CREATE: return this.props.onAdd && this.props.onAdd(this.createUser(this.state)!)
            default: return
        }

    }
    handleInput(value: string, inputType: string) {
        let isValid :boolean = value?true:false
        let isFormValid = this.validateForm(isValid, inputType)
        this.setState({...this.state,isFormValid, inputs:{...this.state.inputs, [inputType]:{value, isValid}}})
    }

    private validateForm(currentInput_isValid: boolean, inputType: string): boolean {
        let step_inputList: string[] = ["name", "username", "phone"];
    
        const step_inputList_exceptThisInput = step_inputList.filter(inp => inp !== inputType);
    
        let FP_FormValidate = currentInput_isValid;
    
        step_inputList_exceptThisInput.forEach(inp => {
    
          let inpObjCore: { [K in keyof any]: any } = this.state.inputs;
          let inpObj = inpObjCore[inp]
    
          FP_FormValidate = inpObj?.isValid && FP_FormValidate;
        });
    
    
        return FP_FormValidate;
      }

    render() {
        const { show, onHide } = this.props
        return (
            <>

                <Modal
                    centered
                    dialogClassName="modal-custom-wide-70"
                    show={show}
                    onHide={onHide}
                >
                    <Modal.Header className="bg-transparent border-bottom-0" >
                        <Modal.Title>
                            <div>{Localization[this.props.type]}</div>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="m-1">
                            <AppInput
                                onChange={(e) => this.handleInput(e.target.value, "name")}
                                label={Localization.name}
                                value={this.state.inputs.name.value} />
                        </div>
                        <div className="m-1">
                            <AppInput
                              onChange={(e) => this.handleInput(e.target.value, "username")}
                                label={Localization.username}
                                value={this.state.inputs.username.value}
                            />
                        </div>
                        <div className="m-1">
                            <AppInput
                              onChange={(e) => this.handleInput(e.target.value, "phone")}
                                value={this.state.inputs.phone.value}
                                label={Localization.phone} />
                        </div>

                    </Modal.Body>
                    <Modal.Footer className='bg-transparent pt-0'>
                        <div className="row">
                            <div className="col-auto">
                                <AppButton className="btn-light" 
                                onClick={() => this.props.onHide()}>cancel</AppButton>
                            </div>
                            <div className="col-auto">
                                <AppButton className="btn-primary"
                                disabled={!this.state.isFormValid}
                                    onClick={() => this.onSubmit(this.props.type)}
                                >submit</AppButton>
                            </div>
                        </div>


                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}
