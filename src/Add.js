import React from 'react';
import {
    Input,
    Button,
    Navbar,
    Nav,
    NavbarBrand,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle, DropdownMenu, DropdownItem, InputGroup, InputGroupAddon
} from 'reactstrap';

class Add extends React.Component {

    text = "";

    constructor(props) {
        super(props);
        this.state = {text: this.text};
        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let text = {...this.state.text};
        text.text = event.target.value;
        this.setState({text: event.target.value});
    }

    async handleAdd() {
        const {text} = this.state;
        console.log(this.state);
        console.log("Sending POST request to /api/invertedindex with text = " + text);
        await fetch('/api/invertedindex', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(text),
            credentials: 'include'
        });
        this.setState({text: this.text});
    }

    render() {
        return <div>
            <Navbar color="light" light expand="md">
                <Nav className="mr-auto" navbar>
                    <NavbarBrand href="/">WebPoisk!!!!</NavbarBrand>
                    <NavItem>
                        <NavLink href="/components/">Components</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/">Search</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            GitHub
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem href="/https://github.com/HelBorg/inverted-index-ui">
                                Front end
                            </DropdownItem>
                            <DropdownItem href="https://github.com/Yowzah/InvertedIndex">
                                Back end
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
            </Navbar>
            <div className="text">
                <h2> Add text </h2>
                <Input type="textarea"
                       style={{marginBottom: 10, height: 400}}
                       name="text"
                       id="text"
                       value={this.state.text}
                       onChange={this.handleChange}/>
                <Button onClick={this.handleAdd} color="danger">Add</Button>
            </div>
        </div>;
    }
}

export default Add;