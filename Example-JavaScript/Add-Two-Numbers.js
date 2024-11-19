/*NASLOV ZADATKA

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Date su vam dve neprazne povezane liste koje predstavljaju dva nenegativna cela broja. Cifre se čuvaju obrnutim redosledom, a svaki njihov čvor sadrži jednu cifru. Dodajte dva broja i vratite zbir kao povezanu listu.

Možete pretpostaviti da dva broja ne sadrže nikakvu početnu nulu, osim samog broja 0.
*/

var addTwoPromises = function (l1, l2) {
    let dummy = new ListNode();
    let res = dummy;
    let total = 0,
        carry = 0;

    while (l1 || l2 || carry) {
        total = carry;

        if (l1) {
            total += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            total += l2.val;
            l2 = l2.next;
        }

        let num = total % 10;
        carry = Math.floor(total / 10);
        dummy.next = new ListNode(num);
        dummy = dummy.next;
    }

    return res.next;
};