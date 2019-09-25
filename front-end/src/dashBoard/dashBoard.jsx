import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getSummary } from '../dashBoard/dashBoardActions'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'

class DashBoard extends Component {
    componentWillMount(){
        this.props.getSummary()
    }
    render() {
        const { totalClientes, totalPedidos, totalAgendamentos } = this.props.summary
        return (
            <div>
                <ContentHeader title='WTI Solutions' small='Versão 1.0' />
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='green' icon='user' value={totalClientes} text='Total de clientes'></ValueBox>
                        <ValueBox cols='12 4' color='aqua' icon='list' value={totalPedidos}  text='Total de pedidos'></ValueBox>
                        <ValueBox cols='12 4' color='blue' icon='check-square-o' value={totalAgendamentos} text='total de agendamentos'></ValueBox>
                    </Row>
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => ({summary:state.dashboard.summary})
const mapDispatchToProps = (dispatch) => bindActionCreators({ getSummary }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(DashBoard)