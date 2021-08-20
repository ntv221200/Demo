// map(): tạo mảng mới có các phần tử là kết quả của 1 function thực hiện lên các phần tử
// của mảng đang xét

//data danh sách học viên
const stuList = [
    {
        id: 1,
        name: "Nguyễn Văn Sơn",
        group:{
            groupId: 1,
            position: "Member",
        }
    },
    {
        id: 2,
        name: "Nguyễn Hữu Ánh",
        group:{
            groupId: 1,
            position: "Member",
        }
    },
    {
        id: 3,
        name: "Trần Mạnh Quân",
        group:{
            groupId: 4,
            position: "Leader",
        }
    },
    {
        id: 4,
        name: "Hà Quốc Tuấn",
        group:{
            groupId: 3,
            position: "Leader",
        }
    },
    {
        id: 5,
        name: "Hoàng Ngọc Thành",
        group:{
            groupId: 1,
            position: "Member",
        }
    },
    {
        id: 6,
        name: "Vũ Thị Thu Hà",
        group:{
            groupId: 2,
            position: "Member",
        }
    },
    {
        id: 7,
        name: "Phan Văn Trung",
        group:{
            groupId: 2,
            position: "Member",
        }
    },
    {
        id: 8,
        name: "Nguyễn Cao Hoàng",
        group:{
            groupId: 2,
            position: "Member",
        }
    },
    {
        id: 9,
        name: "Phùng Đắc Nhật Minh",
        group:{
            groupId: 5,
            position: "Leader",
        }
    },
    {
        id: 10,
        name: "Lê Việt Dũng",
        group:{
            groupId: 1,
            position: "Leader",
        }
    },
    {
        id: 11,
        name: "Đỗ Chí Công",
        group:{
            groupId: 2,
            position: "Member",
        }
    },
    {
        id: 12,
        name: "Trần Công Tâm",
        group:{
            groupId: 3,
            position: "Member",
        }
    },
    {
        id: 13,
        name: "Trương Thanh Tùng",
        group:{
            groupId: 3,
            position: "Member",
        }
    },
    {
        id: 14,
        name: "Tạ Đức Chiến",
        group:{
            groupId: 3,
            position: "Member",
        }
    },
    {
        id: 15,
        name: "Nguyễn Trọng Vĩnh",
        group:{
            groupId: 3,
            position: "Member",
        }
    },
    {
        id: 16,
        name: "Ngô Chung Á Âu",
        group:{
            groupId: 4,
            position: "Member",
        }
    },
    {
        id: 17,
        name: "Trần Thị Khánh Linh",
        group:{
            groupId: 2,
            position: "Leader",
        }
    },
    {
        id: 18,
        name: "Phan Tiến Thành",
        group:{
            groupId: 4,
            position: "Member",
        }
    },
    {
        id: 19,
        name: "Đỗ Văn Huy",
        group:{
            groupId: 4,
            position: "Member",
        }
    },
    {
        id: 20,
        name: "Nguyễn Trung Đức",
        group:{
            groupId: 5,
            position: "Member",
        }
    },
    {
        id: 21,
        name: "Nguyễn Trung Nam",
        group:{
            groupId: 5,
            position: "Member",
        }
    },
    {
        id: 22,
        name: "Trần Quốc Toàn",
        group:{
            groupId: 5,
            position: "Member",
        }
    },
];
// var
const dayArr = [1,2,3,4,5,6,7]

//function
function getNameArr(){
    const nameArr =[];
    stuList.map((e) => {
        e = e.name.split(" ");
        var lastName = e[e.length -1];
        nameArr.push(lastName)
    })
    return nameArr;
}
const groupArr = Array.from(new Set(stuList.map((e) => e.group.groupId)))
function getLastNameArr(list){
    let result = []
    list.map((e) =>{
        let fullName = e.split(" ");
        let lastName = fullName[fullName.length-1]
        result.push(lastName)
    })
    return(result)
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function addPoints(stuId, day, point){
    if(stuList[stuId - 1].hasOwnProperty("points") === false){

        stuList[stuId - 1].points=[];
        stuList[stuId - 1].points.push({
            dayId : day,
            dayName : "Ngày "+day,
            point : point,
        })
    }else{
        stuList[stuId - 1].points.push({
            dayId : day,
            dayName : "Ngày "+day,
            point : point,
        })
    }
}
function fakePoint(){
    stuList.map((e) => {
        dayArr.map((o) =>{
            addPoints(
                e.id,
                o,
                getRandomInt(10)
            )
        })
    })
}

//vd1: lâp bảng danh sách gồm tên thành viên và số lần xuất hiện
const nameArr = getNameArr();
const countNames = nameArr
  .map((o) => ({
    name: o,
    count: nameArr.filter((e) => e == o).length,
  }))
console.log(countNames)

//vd2: lập danh sách từng nhóm
function createGrList(){
    grList =[]
    groupArr.map((g) =>{
        let listStuOfGr = stuList
        .filter((e) => e.group.groupId === g)
        .map((o) => o.name)
        grList.push(
            {
                gourpId : g,
                groupMem : listStuOfGr
            }
        )
    })
    return grList
}
grList = createGrList()
console.log(grList)

//vd3: in ra các nhóm có thành viên tên Thành
function listGrWithAName(name){
    grList = createGrList();
    result = [];
    grList.map((e) =>{
        lastNameArr = getLastNameArr(e.groupMem);
        if (lastNameArr.some(s => s ===name)){
            result.push(e);
        }
    })
    return(result)
}
console.log(listGrWithAName("Tùng"))

fakePoint()

//vd4: Lập danh sách thành viên và tổng điểm của cả tuần
function getStuWithPoint(){
    const result = stuList.map((e) => ({
        name : e.name,
        total : dayArr.map((o) =>{
            let sum = 0;
            sum += stuList[e.id - 1].points[o-1].point
            return sum
        }).reduce(function(pre,cur){
            return pre + cur
        })
    }))
    return result
}
console.log(getStuWithPoint())

//vd5: tìm ra bạn học giỏi nhất ngày thứ x

function getTheBestStuAtDayX(x){
    return stuList.map((e) =>({
        name : e.name,
        point : e.points[x-1].point,
    })).sort((a,b) => b.point - a.point).shift()
}
console.log(getTheBestStuAtDayX(1))

