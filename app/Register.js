import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = {
    content:{
        width:300,
    },
    button:{
        backgroundColor:'#2B6DAB',
        '&:hover':{
            backgroundColor:'#144574',
        }
    }
};

class Register extends React.Component {
    state = {
        open: false,
        email:'',
        password:'',
        nickname:'',
    };

    handleChange = name => event => {
        this.setState({
            [name]:event.target.value,
        });
    };

    clearAll = () =>{
        this.setState({
            email:'',
            password:'',
            nickname:'',
        });
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleSubmit = () =>{
        this.setState({ open: false });
        this.clearAll();
    };

    render() {
        const {classes} = this.props;
        return (
            <div>
                <Button  variant='contained' color='primary' className={classes.button}  onClick={this.handleClickOpen}><img src={require('../pictures/email.png')}/>学邮注册</Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">邮箱登录</DialogTitle>
                    <DialogContent className={classes.content}>
                        <TextField
                            margin="dense"
                            id="email"
                            label="Email Address"
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange('email')}
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            id="password"
                            label="Password"
                            type="password"
                            value={this.state.password}
                            onChange={this.handleChange('password')}
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            id="nickname"
                            label="Nickname"
                            type="text"
                            value={this.state.nickname}
                            onChange={this.handleChange('nickname')}
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            关闭
                        </Button>
                        <Button onClick={this.handleSubmit} color="primary">
                            提交
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

Register.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Register);