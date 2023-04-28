const LinkedList = [
    {
      value: "11",
      id: 1,
      next_id: 2,
    },
    {
      value: "19",
      id: 2,
      next_id: 3,
    },
    {
      value: "32",
      id: 3,
      next_id: 4,
    },
    {
      value: "64",
      id: 5,
      next_id: 6,
    },
    {
      value: "128",
      id: 6,
      next_id: 7,
    },
  ]; 

function sumLinkedList(linkedList) {
  let sum = 0;
  let currentNode = linkedList[0];

  while (currentNode) {
    sum += parseInt(currentNode.value);
    currentNode = linkedList.find((node) => node.id === currentNode.next_id);
  }

  return sum;
}

sumLinkedList(linkedList)
