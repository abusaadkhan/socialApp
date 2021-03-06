import React from 'react'
import {StyleSheet,View} from 'react-native'
import {
    Header,
    Body,
    Right,
    Button,
    Icon,
    Title,
    Text
} from 'native-base'

import { connect} from 'react-redux'
import propTypes from 'prop-types'
import {signOut} from '../action/auth'

const CustomHeader = ({signOut,authState,navigation}) => {
    return(
       <Header androidStatusBarColor='#0f4c75' style={{backgroundColor:"#0f4c75"}}>
        <Body>
         <Title>Social App LCO</Title>
        </Body>

        <Right>
            {authState.isAuthenticated && (
                <View>
                    <Button transparent iconLeft onPress={() => navigation.navigate('AddPost')}>
                        <Text style={{color:"#fdcb9e"}} >Add Post</Text>
                    </Button>
                    <Button transparent  onPress={()=>signOut()}>
                        <Icon name='log-out-outline' style={{color:"red"}} />
                    </Button>
                </View>
            )}
        </Right>
       </Header>
    )
}

const mapStateToProps = (state) =>({
    authState:state.auth
})

const mapDispatchToProps={
    signOut
} 

CustomHeader.propTypes={
    signOut:propTypes.func.isRequired,
    authState:propTypes.object.isRequired
}

export default connect(mapStateToProps,mapDispatchToProps)(CustomHeader)