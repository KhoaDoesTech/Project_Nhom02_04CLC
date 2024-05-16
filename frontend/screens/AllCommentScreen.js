import { AuthContext } from "../store/auth-context.js";
import { useEffect, useState, useContext } from "react";
import { getProductComment } from "../API/Comment/index.js";
import {
  SafeAreaView,
  View,
  Button,
  TextInput,
  StyleSheet,
  Pressable,
} from "react-native";
import AllComment from "../components/Item/AllComment.js";
import { addComment } from "../API/Comment/index.js";
import LeftArrowIcon from "../components/icons/LeftArrowIcon";
import { useNavigation } from "@react-navigation/native";

export default function AllCommentScreen({ route }) {
  const { id } = route.params;

  const [commentList, setCommentList] = useState([]);
  const [newComment, setNewComment] = useState("");

  const authCtx = useContext(AuthContext);
  const userId = authCtx.userInfo.userId;
  const accessToken = authCtx.token;

  useEffect(() => {
    async function fetchAllComment() {
      try {
        const comments = await getProductComment(10, id, userId, accessToken);
        setCommentList(comments);
      } catch (error) {
      }
    }
    fetchAllComment();
  }, []);

  const handleCommentSubmit = async () => {
    try {
      const response = await addComment(
        {
          productId: id,
          content: newComment,
          parentContentId: null,
        },
        userId,
        accessToken
      );
      setCommentList((prevList) => [...prevList, response]);
      setNewComment("");
      async function fetchAllComment() {
        try {
          const comments = await getProductComment(10, id, userId, accessToken);
          setCommentList(comments);
        } catch (error) {

        }
      }
      fetchAllComment();
    } catch (error) {

    }
  };

  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ marginTop: 50, marginLeft: 20 }}>
      <Pressable
        onPress={() =>
          navigation.goBack()
        }
      >
        <LeftArrowIcon />
      </Pressable>
      <SafeAreaView>
        {commentList?.map((comment) => (
          <AllComment
            key={comment?._id ?? ""}
            content={comment?.comment_content ?? ""}
          ></AllComment>
        ))}
      </SafeAreaView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={newComment}
          onChangeText={setNewComment}
          placeholder="Add a comment"
        />
        <Button
          title="Submit"
          onPress={handleCommentSubmit}
          disabled={!newComment}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    width: "70%",
    marginRight: 10,
    padding: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
  },
});
