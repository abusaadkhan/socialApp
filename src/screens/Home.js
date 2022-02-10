import React, {useEffect} from 'react';
import {StyleSheet, FlatList, SafeAreaView} from 'react-native';
import {Container, H1, Text} from 'native-base';
// redux
import {getPost} from '../action/post';
import {connect} from 'react-redux';
import propTypes from 'prop-types';

// to render empty container
import EmptyContainer from '../components/EmptyContainer';
import Post from '../components/Post'

const Home = ({getPost,postState,userDetails}) => {
    
    useEffect(()=>{
        getPost()
    },[])

    if(postState.loading){
        return <EmptyContainer />
    }

    

    return(
       
        <SafeAreaView style={styles.container} >
            <FlatList data={postState.posts}
                      keyExtractor={ (item) => item.id }
                      renderItem={({item,index,separators})=>(
                          <Post item={item} 
                                userDetails={userDetails} 
                                key={item.id}
                                />
                      )}
                      ListEmptyComponent = {()=>(
                          <Container>
                            <H1>No Post Found</H1>
                          </Container>
                      )}
                       />
        </SafeAreaView>
        
                
        
    )
}

const mapStateToProps = (state) =>({
    postState:state.post,
    userDetails:state.auth.user
})

const mapDispatchToProps = {
    getPost
}

Home.propTypes = {
    getPosts:propTypes.func.isRequired,
    postState:propTypes.object.isRequired,
    userDetails:propTypes.object
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#1b262c',
      justifyContent: 'flex-start',
      padding: 4,
      flex: 1,
    },
    emptyContainer: {
      flex: 1,
      backgroundColor: '#1b262c',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });