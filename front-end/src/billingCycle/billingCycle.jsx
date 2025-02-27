import React, { Component } from 'react'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeaders'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/tabHeader'

class BillingCycle extends Component
{
    render(){
        return (
            <div>
                <ContentHeader title='Ciclo de Pagamentos' small='Cadastro'>
                    <Content>
                        Ciclo de Pagamentos
                    </Content>
                </ContentHeader>
                <Tabs>
                    <TabsHeader>
                            <TabHeader label='Listar' icon='bars' target='tabList' />
                            <TabHeader label='Incluir' icon='plus' target='tabCreate' />
                            <TabHeader label='Alterar' icon='pencil' target='tabUpdate' />
                            <TabHeader label='Excluir' icon='trash-o' target='tabDelete' />
                    </TabsHeader>
                    <TabsContent>
                    </TabsContent>
                </Tabs>
            </div>
        )
    }
}
export default BillingCycle