import List "mo:core/List";
import Runtime "mo:core/Runtime";

actor {
  type Submission = {
    name : Text;
    email : Text;
    company : Text;
    message : Text;
  };

  let submissions = List.empty<Submission>();

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, company : Text, message : Text) : async () {
    if (name == "" or email == "" or message == "") {
      Runtime.trap("Name, email, and message are required fields.");
    };

    let submission : Submission = {
      name;
      email;
      company;
      message;
    };

    submissions.add(submission);
  };

  public query ({ caller }) func getAllSubmissions() : async [Submission] {
    submissions.toArray();
  };
};
