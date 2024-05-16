import { Image, SafeAreaView, StyleSheet, ScrollView, Text, Pressable } from "react-native";
import RateIcon from "../icons/RateIcon";
import RightArrowIcon from "../icons/RightArrowIcon";
import Comment from "./Comment.js";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from '../../store/auth-context.js';

import { getProductComment } from "../../API/Comment/index.js";
import { useNavigation } from "@react-navigation/native";

export default function ProductRating(props) {
    const navigation = useNavigation();
    const [commentList, setCommentList] = useState([]);

    const authCtx = useContext(AuthContext)
    const userId = authCtx.userInfo.userId
    const accessToken = authCtx.token

    useEffect(() => {
        async function fetchAllComment() {
            try {
                const comments = await getProductComment(3, props.productId, userId, accessToken);
                setCommentList(comments);
            } catch (error) {
            }
        }
        fetchAllComment();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Pressable style={[styles.detailContainer, { flexDirection: 'row' }]}>
                <SafeAreaView>
                    <Text style={styles.title}>Product Reviews</Text>
                    <SafeAreaView style={[styles.rowContainer, { paddingRight: 20 }]}>
                        <RateIcon color={'#FFC300'} />
                        <RateIcon color={'#FFC300'} />
                        <RateIcon color={'#FFC300'} />
                        <RateIcon color={'#FFC300'} />
                        <RateIcon color={'#FFC300'} />
                        <Text style={styles.statisticText}>{props.rating}</Text>
                    </SafeAreaView>
                </SafeAreaView>
                <Pressable
                    style={styles.rowContainer}
                    onPress={() => navigation.navigate("AllComment", {
                        id: props.productId,
                    })}
                >
                    <Text style={styles.more}>All</Text>
                    <RightArrowIcon />
                </Pressable>
            </Pressable>
            <SafeAreaView style={styles.reviewDetail}>
                {commentList?.map((comment) => (
                    <Comment
                        key={comment._id}
                        content={comment.comment_content}></Comment>
                ))}
            </SafeAreaView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E8E8E8',
        marginTop: 10,
        paddingVertical: 5,
        paddingHorizontal: 20,
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    statisticText: {
        fontSize: 16,
        marginHorizontal: 5,
    },
    detailContainer: {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    more: {
        fontSize: 16,
        color: '#38A59F'
    },
    reviewDetail: {
        marginTop: 10,
        padding: 20,
        borderTopWidth: 0.5
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
    },
    reviewDate: {
        fontSize: 14,
        marginHorizontal: 10,
    },
    reviewContent: {
        fontSize: 16
    }
});
