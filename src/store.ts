type Note = {
  id: string;
  title: string;
  completed: boolean;
};

type State = {
  notes: Array<Note>;
};

type Action =
  | {
      type: "crypt";
      note: string;
    }
  | {
      type: "check";
      id: string;
    }
  | {
      type: "delete_check";
      id: string;
    };

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "crypt":
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            id: Math.random().toString(36).substring(7),
            title: action.note,
            completed: false,
          },
        ],
      };

    case "check":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.id ? { ...note, completed: !note.completed } : note
        ),
      };

    case "delete_check":
      return {
        ...state,
        notes: state.notes.filter(({ id }) => id !== action.id),
      };

    default:
      throw new Error();
  }
};
