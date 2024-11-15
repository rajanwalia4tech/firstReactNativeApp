import React from "react";
import { StyleSheet, Text, View, Button, Image, ScrollView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./";
import { StatusBar } from "react-native";
const logoImg = require("../assets/images/adaptive-icon.png");
// Define props for this screen
type Props = NativeStackScreenProps<RootStackParamList, "Page">;

export default function Page({ navigation }: Props) {
  return (
    <View style={{flex:1}}>
      {/* only works on the android */}
      <StatusBar backgroundColor="lightgreen" barStyle="dark-content"></StatusBar>
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Hello World Rajansdfsd</Text>
      <Text style={styles.subtitle}>This is the first page of your app.</Text>
      {/* for network images width and height is mandatory */}
      <Image source={{uri:"https://picsum.photos/300"}} style={{width:200, height:200}}></Image>
      <Button title="Go to Second Page" onPress={() => navigation.navigate("SecondPage")} />
      <Text style={{color : "white"}}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi libero iusto ipsam voluptates impedit, quidem esse itaque beatae provident hic vero mollitia sed quod aperiam quas laudantium vitae ut! Quisquam.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla veniam neque illo a, dicta quod nostrum vitae delectus, soluta unde sit harum facere similique, ullam tempora quia saepe! Officiis, sequi.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, quos voluptates. Aut architecto cum qui atque inventore sit a, rerum molestias! Reprehenderit corrupti odit cupiditate mollitia rem esse aspernatur adipisci!
        Sit, officiis voluptate veritatis nemo quos vero facere excepturi illum? Repellat quas nulla aut eaque quae aspernatur fugit. Cupiditate, aliquid fugiat. Et voluptates porro similique recusandae quod, quaerat repellendus sunt!
        Soluta sed minima quisquam dolore commodi doloribus eaque quam aut, dolor sint aspernatur eius molestiae, voluptas explicabo vitae consequuntur. Repudiandae optio ex, alias fuga corrupti ducimus quia ab nesciunt aut!
        Quo velit magnam corporis adipisci consequuntur quisquam accusamus provident numquam, corrupti libero iusto eos, ullam, totam voluptate. Fugit sapiente aliquid hic earum et suscipit odit, beatae iure doloremque? Officia, vel.
        Adipisci eaque necessitatibus incidunt veritatis tempora exercitationem fugiat. Ut sed iusto, necessitatibus maxime deleniti harum nostrum quis expedita officiis velit ad beatae ipsam pariatur ipsa praesentium obcaecati commodi quasi distinctio?
        Obcaecati ullam deserunt debitis quae culpa. Aperiam recusandae ad veniam consequuntur doloribus perspiciatis maxime qui hic minima quasi itaque, deleniti odio cum quaerat fuga quidem. Odio necessitatibus obcaecati tempora eius.
        Ex aliquid nulla rem magni repellat vel, aliquam error facilis explicabo perspiciatis quaerat voluptatibus nobis nihil debitis odit unde maiores incidunt reiciendis eligendi reprehenderit quod facere sed iste commodi? At.
        Voluptates animi soluta blanditiis sequi dolores natus, magni modi, officiis nesciunt sit beatae ex ipsum consequuntur neque inventore temporibus asperiores? Mollitia possimus placeat alias exercitationem asperiores velit aliquid doloribus dolorem.
        Sint officiis repudiandae voluptatem nesciunt, temporibus ipsam ducimus commodi repellat non exercitationem reprehenderit dolor, veniam illo dignissimos accusamus fugit dolorem in earum dolore excepturi! Sit sapiente pariatur eum quia tenetur?
        Saepe inventore aliquam ipsum sit temporibus tempora aspernatur alias reiciendis, consectetur nostrum, cum, facere magnam fuga vel excepturi! Odio exercitationem modi consequuntur sequi accusamus iure libero dolorum consequatur harum quia.
        Deleniti minus mollitia delectus eos rem. Tenetur quod soluta quas dolorum assumenda quos nisi atque, illo ea, suscipit, harum officia? Quasi culpa suscipit illum aspernatur cum quo esse inventore quisquam.
        Explicabo repellat blanditiis odit neque dolorem aperiam, repellendus magnam recusandae beatae esse officiis minus nam quos nemo officia doloremque voluptatum, atque qui libero! Tempora, eum facere amet suscipit asperiores fuga?
        Delectus, vero ad placeat a aspernatur quam sapiente sequi accusamus natus quaerat labore fuga, in ab reiciendis suscipit provident ex tenetur laborum. Nisi eos provident perspiciatis neque minima, consectetur error!
        Veniam adipisci maiores nesciunt enim reprehenderit eaque animi deleniti, officia odit, at, quidem repellendus soluta. Rem quae quas tenetur quos animi! Facilis modi a voluptates illum error voluptatem beatae incidunt!
        Fugit quas sint atque magnam nam sunt saepe, cumque nostrum dolor illo quibusdam odit iusto praesentium assumenda consectetur, consequuntur incidunt molestias, consequatur debitis obcaecati minima modi. Consectetur modi voluptatum dolores.
        Perspiciatis pariatur facere quisquam temporibus, nihil sapiente libero, earum, sunt consectetur ab exercitationem accusantium corrupti eligendi itaque recusandae totam? Quidem, sequi eligendi molestiae itaque eaque magni fugit quasi saepe iusto!
        Unde optio sint cum quia qui laboriosam, officia vitae ipsam cupiditate animi assumenda fugit amet aspernatur, reiciendis voluptatem esse! Debitis dolor eius sint deleniti, nulla corrupti! Quo tenetur ex iure!
        Nam soluta placeat explicabo maiores voluptas ipsa ullam? Debitis, libero dolor exercitationem ipsa similique, consequuntur ea nesciunt provident eos praesentium magni, voluptatem vitae enim error aperiam asperiores. Excepturi, sint aut.
        Suscipit, laboriosam fugit recusandae facere dolor, repellat, iure unde esse ad nostrum temporibus ducimus nemo ratione veniam quia eveniet saepe repudiandae. Beatae laboriosam quae quam voluptate veritatis dicta explicabo deserunt.
        Nostrum temporibus ad esse quia rerum, ipsum, dolore, alias quidem beatae debitis quam iste! Quisquam itaque, nobis sequi animi tempora aliquam temporibus reiciendis. Maxime velit ad eos at blanditiis voluptate.
        Aliquid rem obcaecati veritatis, aperiam excepturi quia sequi voluptas minus commodi unde explicabo corporis ratione doloremque eius impedit quo necessitatibus facere! Accusamus magnam quod inventore magni ratione in nisi reiciendis!
        Nisi enim, quod possimus neque dolor perspiciatis architecto, itaque ipsam iure id dignissimos dicta tempora. Provident libero placeat cupiditate atque inventore fugiat quo, accusamus maxime explicabo iure voluptatum, reprehenderit laborum?
        Maxime possimus repudiandae ullam tempora debitis odio ab voluptates et officiis cum corrupti, ipsa cumque molestiae dolorum, ut rem suscipit accusamus unde laboriosam. Voluptatem accusamus quis praesentium unde expedita saepe.
        Veniam dignissimos fuga minus corporis iure officia optio repudiandae esse velit sed quia porro modi deleniti dolorem quae nostrum dolores explicabo aliquam, nemo minima vel, quam ipsa aut laudantium? Sequi.
        Quos, obcaecati velit labore minus, rem perferendis sint nam quisquam maiores qui ratione! Et doloribus perferendis quaerat porro, nam excepturi, architecto iusto eum omnis esse harum consectetur, ducimus in quia!
        Quaerat maiores, facilis voluptas ex unde, saepe nam veniam animi quis aliquam ea ad similique corporis? Qui eum, optio sit similique dolor itaque architecto ullam recusandae veniam quisquam magnam fuga?
        Eius assumenda reprehenderit alias dolor, eveniet, in, placeat et fuga exercitationem nemo maiores. Minus eos tempore aut necessitatibus eaque, ab deleniti? Harum laborum a eligendi praesentium expedita minima sed amet.
        Labore doloremque eius laborum? Amet fugiat, molestiae labore possimus veniam at ut repellat sapiente, soluta aperiam provident sint? Perferendis sunt dolore quaerat architecto laudantium veritatis ipsa, harum excepturi tenetur laboriosam?
        Deleniti quas ipsam amet quod ipsum praesentium consequuntur reprehenderit natus soluta alias quos, ex omnis saepe veniam explicabo sed nostrum laudantium hic, maiores aliquam qui. Iste perspiciatis nisi distinctio fuga.
        Praesentium, qui? Modi quam facere tenetur inventore, autem sunt voluptatibus reiciendis nihil itaque quia quod doloremque, nam accusantium cumque quas, neque hic! Commodi quam accusantium libero aspernatur voluptas, voluptate recusandae.
        Veniam unde eveniet, magni facilis odit recusandae blanditiis sapiente explicabo quia dolor aspernatur molestiae totam necessitatibus, vel cumque ipsam delectus inventore consectetur! Hic tempore ad maiores similique voluptatum error optio?
        Doloribus a, similique exercitationem molestias porro ipsam dolor delectus suscipit vel facere officia modi minima cum quam quos natus inventore eveniet sapiente, voluptatibus voluptatem dicta ratione enim? Quas, ea nihil?
        Odio cupiditate reprehenderit voluptates quos? Aperiam cum voluptatum magnam ullam? Iste mollitia aperiam ut quis pariatur dolor dolorum velit numquam, laborum, ea autem dolores. Molestias numquam itaque fugit quam porro!
        Quo itaque, dolorem voluptas quidem nostrum tempora expedita omnis nesciunt asperiores rem laudantium minus rerum sunt quaerat voluptates corporis. Eaque doloremque optio ducimus et. Non quisquam necessitatibus molestias voluptate sit.
        Praesentium, ducimus. Debitis impedit excepturi ipsum consequuntur commodi! Quam, quas quia, vero quod perferendis iure earum, ea asperiores magni exercitationem itaque repellendus nam odio minus dignissimos eveniet provident obcaecati at.
      </Text>
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    padding: 10,
    paddingBottom:50,
    backgroundColor: "#072c66",

  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
    color: "white",
  },
  subtitle: {
    fontSize: 36,
    color: "white",
  },
});
